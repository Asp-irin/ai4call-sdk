package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	sdk "github.com/voxgig-sdk/ai4call-sdk/go"
)

const assistantsPath = "/api/v1/assistants"
const apiBaseURL = "https://client-api.ai4call.com"

func main() {
	email := os.Getenv("AI4CALL_EMAIL")
	portalKey := os.Getenv("AI4CALL_PORTAL_KEY")
	if email == "" || portalKey == "" {
		log.Fatal("AI4CALL_EMAIL and AI4CALL_PORTAL_KEY must be set")
	}

	fmt.Println("=== AI4CALL API Test ===")

	// Raw HTTP path: call the read-only endpoint directly with net/http.
	fmt.Println("\n--- Raw HTTP ---")
	fmt.Println("GET", assistantsPath)
	req, err := http.NewRequest(http.MethodGet, apiBaseURL+assistantsPath, nil)
	if err != nil {
		log.Fatal(err)
	}
	req.Header.Set("x-client-email", email)
	req.Header.Set("x-portal-api-key", portalKey)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	body, readErr := io.ReadAll(resp.Body)
	resp.Body.Close()
	if readErr != nil {
		log.Fatal(readErr)
	}
	fmt.Println("Status:", resp.StatusCode)
	fmt.Println("Response:", readable(body))

	// Both SDK paths below use the generated client and its authentication.
	client := sdk.NewAi4callSDK(map[string]any{
		"apikey": email,
		"headers": map[string]any{
			"x-portal-api-key": portalKey,
		},
		"system": map[string]any{
			"fetch": loggedFetch,
		},
	})

	// Semantic SDK path: this is the natural entity-oriented call. It exposes
	// the generated route-selection issue when no assistant ID is provided.
	fmt.Println("\n--- Voxgig Generated SDK (Assistant.Load) ---")
	fmt.Println("List assistants")
	semanticResult, semanticErr := client.Assistant(nil).Load(nil, nil)
	fmt.Println("Result:", readableValue(semanticResult))
	if semanticErr == nil {
		fmt.Println("Error: nil")
	} else {
		fmt.Println("Error:", semanticErr)
	}

	// Direct SDK path: the generated client's explicit endpoint request. This
	// is the working SDK equivalent for the same read-only collection request.
	fmt.Println("\n--- Voxgig Generated SDK (Direct) ---")
	fmt.Println("GET", assistantsPath)
	result, sdkErr := client.Direct(map[string]any{
		"path":   assistantsPath,
		"method": http.MethodGet,
	})
	if resultBody, ok := result["data"]; ok {
		fmt.Println("Result:", readableValue(resultBody))
	} else {
		fmt.Println("Result:", readableValue(result))
	}
	if sdkErr == nil {
		fmt.Println("Error: nil")
	} else {
		fmt.Println("Error:", sdkErr)
	}
}

func readable(body []byte) string {
	var value any
	if json.Unmarshal(body, &value) == nil {
		return readableValue(value)
	}
	return string(body)
}

func readableValue(value any) string {
	// requestId is generated per request, so omit it to make the two
	// independently fetched responses directly comparable.
	if object, ok := value.(map[string]any); ok {
		comparable := map[string]any{}
		for key, item := range object {
			if key != "requestId" {
				comparable[key] = item
			}
		}
		value = comparable
	}
	formatted, err := json.MarshalIndent(value, "", "  ")
	if err == nil {
		return string(formatted)
	}
	return fmt.Sprint(value)
}

// loggedFetch lets us inspect the request constructed by the generated SDK
// while still using the SDK's normal operation, authentication, and response
// handling.
func loggedFetch(url string, init map[string]any) (map[string]any, error) {
	method, _ := init["method"].(string)
	if method == "" {
		method = http.MethodGet
	}
	fmt.Printf("SDK request: %s %s\n", method, url)

	req, err := http.NewRequest(method, url, nil)
	if err != nil {
		return nil, err
	}
	if headers, ok := init["headers"].(map[string]any); ok {
		for name, value := range headers {
			req.Header.Set(name, fmt.Sprint(value))
		}
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	fmt.Printf("SDK response: %s\n", readable(body))

	var decoded any
	if err := json.Unmarshal(body, &decoded); err != nil {
		decoded = nil
	}
	responseHeaders := map[string]any{}
	for name, values := range resp.Header {
		if len(values) > 0 {
			responseHeaders[name] = values[0]
		}
	}
	return map[string]any{
		"status":  resp.StatusCode,
		"headers": responseHeaders,
		"json":    func() any { return decoded },
	}, nil
}

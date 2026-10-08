# AI4CALL Playground

Create the local environment file from the template and fill in your credentials:

```bash
cp playground/.env.example playground/.env
# Edit playground/.env with your AI4CALL credentials.
```

Load the variables and run from the repository root:

```bash
set -a
source playground/.env
set +a
cd go
go run ../playground/main.go
```

Run the Python comparison from the repository root:

```bash
python3 -m pip install -e ./py
python3 playground/main.py
```

The program performs read-only requests using raw HTTP, the semantic generated
Go/Python SDKs, and the SDKs' explicit `Direct` methods. Use it to compare
authentication, request behavior, status codes, and response data. It only lists
assistants and does not create or modify any AI4CALL resources.

Example output: both paths return the same assistant data and a successful
status, making it easy to compare the direct API call with the SDK call.

```text
go run ../playground/main.go
=== AI4CALL API Test ===

--- Raw HTTP ---
GET /api/v1/assistants
Response: {
  "data": {
    "assistants": []
  },
  "message": "Assistants retrieved successfully.",
  "meta": {
    "count": 0
  },
  "success": true
}

--- Voxgig Generated SDK ---
List assistants
Result: {
  "data": {
    "assistants": []
  },
  "message": "Assistants retrieved successfully.",
  "meta": {
    "count": 0
  },
  "success": true
}
```

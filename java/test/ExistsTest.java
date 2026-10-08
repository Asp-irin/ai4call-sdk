package voxgig.ai4callsdk.sdktest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import voxgig.ai4callsdk.core.Ai4callSDK;

public class ExistsTest {

  @Test
  public void testMode() {
    Ai4callSDK testsdk = Ai4callSDK.testSDK();
    assertNotNull(testsdk, "expected non-nil SDK");
  }
}

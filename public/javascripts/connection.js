function connect() {
    console.log("Service active.");
    easyrtc.setSocketUrl(":3000");
    easyrtc.setUsername("trisna1453");
    easyrtc.setCredential({
      "password":"1453",
      "apikey":"r4wrwf46346thfhath5632eryyhg"
    });
    easyrtc.connect("app1453", loginSuccess, loginFailure);
}

function loginSuccess(easyrtcid) {
    console.log(easyrtcid);
}

function loginFailure(errorCode, message) {
    easyrtc.showError(errorCode, message);
}
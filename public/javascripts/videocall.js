function videocall() {
    easyrtc.enableVideo(true);
    easyrtc.enableVideoReceive(true);
    easyrtc.setVideoDims(640, 480);
    easyrtc.initMediaSource(
        function () {
            var mainVideo = document.getElementById("mainVideo");
            easyrtc.setVideoObjectSrc(mainVideo, easyrtc.getLocalStream());
        },
        function (errorCode, errmesg) {
            easyrtc.showError(errorCode, errmesg);
        }
    );
}


function hangup(easyrtcId) {
    // easyrtc.hangupAll();
    easyrtc.hangup(easyrtcId);
}

function disconnected() {
    easyrtc.disconnect();
}

function performCall(otherEasyrtcid) {

    easyrtc.hangupAll();
    var acceptedCB = function (accepted, easyrtcid) {
        if (!accepted) {
            easyrtc.showError("CALL-REJECTED", "Sorry, your call to " + easyrtc.idToName(easyrtcid) + " was rejected");
        }else{
            console.log("call accepted by " + easyrtc.idToName(easyrtcid));
        }
    };
    var successCB = function (easyrtcid, mediaType) {
        console.log("Got mediaType " + mediaType + " from " + easyrtc.idToName(easyrtcid));
    };
    var failureCB = function (errorCode, errMessage) {
        console.log("call to  " + easyrtc.idToName(otherEasyrtcid) + " failed:" + errMessage);
    };
    easyrtc.call(otherEasyrtcid, successCB, failureCB, acceptedCB);


}


easyrtc.setStreamAcceptor(function (easyrtcid, stream) {
    var video = document.getElementById('callerVideo');
    easyrtc.setVideoObjectSrc(video, stream);
    console.log("saw video from " + easyrtcid);

});

easyrtc.setOnStreamClosed( function (easyrtcid) {
    easyrtc.setVideoObjectSrc(document.getElementById('callerVideo'), "");
});

easyrtc.setAcceptChecker(function(easyrtcid, callback) {
    document.getElementById('acceptCallBox').style.display = "block";
    if( easyrtc.getConnectionCount() > 0 ) {
        document.getElementById('acceptCallLabel').innerHTML = "Drop current call and accept new from " + easyrtc.idToName(easyrtcid) + " ?";
    }
    else {
        document.getElementById('acceptCallLabel').innerHTML = "Accept incoming call from " + easyrtc.idToName(easyrtcid) +  " ?";
    }
    var acceptTheCall = function(wasAccepted) {
        document.getElementById('acceptCallBox').style.display = "none";
        if( wasAccepted && easyrtc.getConnectionCount() > 0 ) {
            easyrtc.hangupAll();
        }
        callback(wasAccepted);
    };
    document.getElementById("callAcceptButton").onclick = function() {
        acceptTheCall(true);
    };
    document.getElementById("callRejectButton").onclick =function() {
        acceptTheCall(false);
    };
} );
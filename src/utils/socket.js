let ws = null;
let globalCallback = (res) => {
    console.log(res)
};
var serverPort = '5000';	//webSocket连接端口


function getWebIP() {
    var curIP = window.location.hostname;
    return curIP;
}

function initWebSocket() { //初始化weosocket
    //ws地址
    // var wsuri = "ws://" + getWebIP() + ":" + serverPort;
    var wsuri = "ws://localhost:9503";
    ws = new WebSocket(wsuri);
    ws.onmessage = function (e) {
        handleMessage(e);
    }
    ws.onClose = function (e) {
        handleClose(e);
    }
    ws.onopen = function () {
        handleOpen();
    }

    //连接发生错误的回调方法
    ws.onerror = function () {
        console.log("WebSocket连接发生错误");
    }
}

// 实际调用的方法
function sendMsg(data) {
    if (ws.readyState === ws.OPEN) {
        //若是ws开启状态
        websocketsend(data)
    } else if (ws.readyState === ws.CONNECTING) {
        // 若是 正在开启状态，则等待1s后重新调用
        setTimeout(function () {
            sendMsg(data);
        }, 1000);
    } else {
        // 若未开启 ，则等待1s后重新调用
        setTimeout(function () {
            sendMsg(data);
        }, 1000);
    }
}

function getMsg(callback) {
    globalCallback = callback;
}

//数据接收
function handleMessage(e) {
    globalCallback(e.data);
}

//数据发送
function websocketsend(agentData) {
    ws.send(JSON.stringify(agentData));
}

//关闭
function handleClose(e) {
    console.log("connection closed", e.code);
}

function handleOpen(e) {
    console.log("连接成功", e);
}

initWebSocket();

export { sendMsg, getMsg }
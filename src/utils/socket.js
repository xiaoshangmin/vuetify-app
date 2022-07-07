import { uuid } from '@/utils/utils'
let ws = null;
let timer = null
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
    //重连
    // initWebSocket()
}

function handleOpen(e) {
    console.log("连接成功", e);
    let data = {
        key: localStorage.getItem('uid') || uuid()
    }
    ws.send(JSON.stringify(data));
    //每30秒发送一次消息
    timer = setInterval(res => {
        if (ws.readyState == ws.CLOSED) {
            clearInterval(timer)
            alert(" 与服务器连接建立失败  处理结果无法及时接收，请刷新页面重试")
            return
        }
        ws.send(1);
    }, 15000)
}

initWebSocket();

export { sendMsg, getMsg }
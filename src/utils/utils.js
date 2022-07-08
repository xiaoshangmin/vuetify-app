export const uuid = () => {
    return 'xxxxxxxxxxx4xxxyxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const filesize = (bytes) => {
    if (bytes < 0.1 * 1024 * 1024) {            //小于0.1MB，则转化成KB
        bytes = (bytes / 1024).toFixed(2) + "KB"
    } else if (bytes < 0.1 * 1024 * 1024 * 1024) {        //小于0.1GB，则转化成MB
        bytes = (bytes / (1024 * 1024)).toFixed(2) + "MB"
    } else {                                            //其他转化成GB
        bytes = (bytes / (1024 * 1024 * 1024)).toFixed(2) + "GB"
    }
    let bytesStr = bytes + "";                        //转成字符串
    return bytesStr
}

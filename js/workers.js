function T(txt) {
    return txt < 3 ? 1 : T(txt - 2) + T(txt - 1)
}
onmessage = function (event) {
    //data 是获取数据的
    var result = T(event.data);
   return  postMessage(result)
}
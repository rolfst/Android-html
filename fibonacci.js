var results = [];
function resultReciever(event){
        results.push(parseInt(event.data));
        if(results.length == 2){
            postMessage(results[0] + results[1]);
            }
    }
function errorReciever(event){
    throw event.data;
}
onmessage = function(event){
    var n = parseInt(event.data);
        postMessage(n);
};


onmessage = function(event) {
    console.info(event);

    const arrayBuffer = new ArrayBuffer(event.data.length);
    var view1 = new DataView(arrayBuffer);

    console.info(view1);
}
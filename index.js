const worker = new Worker('./worker.js');

const file = document.querySelector('#file');
file.onchange = function() {
    const filePart = this.files[0].slice(0, 131072);

    const binaryReader = new FileReader();
    binaryReader.onload = function() {
        worker.postMessage({
            id: 1234,
            buffer: binaryReader.result
        });
    };
    
    binaryReader.readAsArrayBuffer(filePart);
}


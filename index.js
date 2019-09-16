const worker = new Worker('./worker.js');

const file = document.querySelector('#file');
file.onchange = function() {
    console.info(this.files);

    const filePart = this.files[0].slice(0, 131072);

    console.info(filePart);

    binaryReader = new FileReader();
    binaryReader.onload = function() {
        worker.postMessage({
            id: 1234,
            binary_string: binaryReader.result
        });
    };
    
    binaryReader.readAsBinaryString(filePart);
}


onmessage = (event) => {
    const dataView = new DataView(event.data.buffer);

    console.info(dataView);
}
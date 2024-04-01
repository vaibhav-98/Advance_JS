function download(url, cb) {
    console.log("Starting download from url", url);
    setTimeout( function exec() {
        console.log("Completed downloading after 5s");
        const content = "ABCDEF"
        //cb(content)
        //cb(content)
    })
}

download("www.xyz.com", function processDownload(data){
    console.log("download data", data);
})
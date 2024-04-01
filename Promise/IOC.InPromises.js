function download(url){
    console.log("Started downloading content from", url);
    return new Promise ( function exec(res,rej){
        setTimeout( function p(){
            console.log("Complete downloading data in 5s");
            const content = "ABCDEF";
            res(content)
            res(content)
        },5000)
    })
}

download("www.xyz.com")
.then(function fullfillHandler(value){
    console.log("Content download",value);
})
let topMod = 0;
let leftMod = 0;

$("body").on("mousemove", webHandler);

function webHandler(event){
    let button = $('#no').position();
    let buttonCenter = {
        x: button.left + 50,
        y: button.top + 15
    }
    let distance = Math.sqrt(Math.pow(event.pageX - buttonCenter))
}
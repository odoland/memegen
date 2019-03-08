
function produceImage() {

    const link = document.getElementById("enterlink");
    const top = document.getElementById("toptext");
    const bot = document.getElementById("bottext");

    let url = link.value;
    let top_text = top.value;
    let bot_text = bot.value;

    [link, top, bot].forEach( (ele) => ele.value = "" );

    imageHTML = `<div class="imagewrap" onclick="this.remove()">


                    <div class="text top_text">
                    ${top_text} 
                    </div>
                    <img src="${url}">
                    
                    <div class="text bot_text">
                    ${bot_text}
                    </div>

                    <div class="overlay">
                    Close
                    </div>


                 </div>
                `
    document.getElementById("output").innerHTML += imageHTML
}

var submit_button = document.getElementById("submit");
submit_button.addEventListener("click", produceImage);
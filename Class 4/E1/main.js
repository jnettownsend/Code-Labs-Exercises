const javascriptSingleButton = document.querySelector(".btn_onclick");

javascriptSingleButton.onclick = function() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    
}


// function changeBgToRandom() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);

//     document.body.style.backgroundColor = `#${randomColor}`;
// }

// const eventListenerButton = document.querySelector("btn_event-listener");
//     eventListenerButton.addEventListener("click", changeBgToRandom);
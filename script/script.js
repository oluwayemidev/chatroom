document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#submit').disabled = true;

    document.querySelector('#chatInput').onkeyup = () => {
        if(document.querySelector('#chatInput').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }else{
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = function() {
        const chatInput = document.querySelector('#chatInput').value;
        const chat = document.createElement('div');
        chat.style.background = '#84A9AC';
        chat.style.width = 'fit-content';
        chat.style.padding = '10px 20px 10px 20px';
        chat.style.borderRadius = '20px';
        chat.style.marginTop = '10px';
        chat.style.color = "white";
        chat.style.wordBreak = "break-word";
        chat.style.cursor = "pointer";
        chat.style.userSelect = "none";

        const date = new Date();
        const chatTime = date.toLocaleTimeString();
        const chatDateAndTime = document.createElement("div");
        chatDateAndTime.style.color = "grey";
        chatDateAndTime.style.fontSize = "0.8rem";
        chatDateAndTime.innerHTML = chatTime;
        chatDateAndTime.style.visibility = "hidden";

        chat.innerHTML = chatInput;
        document.querySelector('#chatBox').append(chat, chatDateAndTime);
        document.querySelector("#chatInput").value = "";

        document.querySelector("#submit").disabled = true;

        var container = document.querySelector("#chatContainer");
        var chatHeight = container.scrollHeight;

        container.scrollTop = chatHeight;

        chat.onmouseover = function() {
            chatDateAndTime.style.visibility = "visible";
        }
        chat.onmouseout = function() {
            chatDateAndTime.style.visibility = "hidden";
        }

        
        return false;
    }
}); 
const submitButton = document.getElementById("submit_buttom");
const textBox = document.getElementById("query_box");

async function get_query() {
    const inputEl = document.getElementById("query_box")
    const query = inputEl.value;
    console.log("clicked")
    console.log(query)
    display_text(query,"user")

    let query_response = await get_response(query);
    display_text(query_response, "system")
}

function display_text(text, persona) {
    const inputNode = document.getElementById("query_box")
    const parentNode = document.getElementById("chat_content")
    const divNode = document.createElement("div")
    
    if (persona == "user") {
        divNode.classList.add("user", "response")
    }
    else {
        divNode.classList.add("system", "response")
    }
    
    divNode.innerText = persona+': '+text;
    parentNode.appendChild(divNode);
    inputNode.value = '';
    inputNode.focus();
}

async function get_response(query) {
    
    const data = await fetch('/get_response/'+query);
    let response_json = await data.json()
    
    return response_json.text;
}


submitButton.addEventListener('click',get_query, false);
textBox.focus();
const submitButton = document.getElementById("submit_buttom");

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
    const liNode = document.createElement("li")
    
    if (persona == "user") {
        liNode.setAttribute("class","user")
    }
    else {
        liNode.setAttribute("class","system")
    }
    

    liNode.innerText = persona+': '+text;
    parentNode.appendChild(liNode);
    inputNode.value = '';
}

async function get_response(query) {
    
    const data = await fetch('/get_response/'+query);
    let response_json = await data.json()
    
    return response_json.text;
}

submitButton.addEventListener('click',get_query, false);

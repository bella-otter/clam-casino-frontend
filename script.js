//rough pseudocode:
//prompt on loading page for server ip
//new game button: send POST to ip
//receive game id
//(NOT YET IMPLEMENTED:) receive 
//when user clicks a card:
//send POST request with card info
//receive response
//flip card based on response

const servInput = document.getElementById("servername");
const form = document.getElementById("serverForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const serverID=servInput.value;
    console.log(serverID);
    const gamecode = fetchReq(serverID).then(value=>console.log(value));
});

async function fetchReq(address, jsonToUse=null) {
    const response = await fetch(address,{
    method:"POST",
    // headers: {
    //    "Content-Type": "application/json"
    //}
    body: JSON.stringify(jsonToUse)
    })
    const data = await response.text();
    console.log(data);
    return data;
}

//const gamecode = fetchReq(serverID).then(value=>console.log(value));
//replace console.log in above with some function that displays the board?

//document.getElementById("output").innerHTML = data;//displaying the info
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
    const pushAddress=serverID+"/new";//user should only enter address not port or /new
    console.log(serverID);
    const gamecode = fetchReq(pushAddress).then(value=>connectMain(value, serverID));
});
async function connectMain(gamecode, address) {//executes after address form is submitted
    console.log(gamecode);
    //send get request for rows/cols
    //parse that info
    //display the board accordingly
    tempAddress = address + "/totals/" + gamecode;
    console.log(tempAddress);
    const rowCol= await fetchReq(tempAddress, null, "GET");
    console.log(rowCol);
}

async function fetchReq(address, jsonToUse=null, requestType="POST") {
    const response = await fetch(address,{
    method:requestType,
    // headers: {
    //    "Content-Type": "application/json"
    //}
    //body: JSON.stringify(jsonToUse)
    })
    const data = await response.text();
    console.log(data);
    return data;
}


//const gamecode = fetchReq(serverID).then(value=>console.log(value));
//replace console.log in above with some function that displays the board?

//document.getElementById("output").innerHTML = data;//displaying the info
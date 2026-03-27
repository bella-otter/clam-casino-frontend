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
    flipCard(2,2, address, gamecode);
}

async function flipCard(rowNum, colNum, address, gamecode) {
    tempAddress = address + "/flip/" + gamecode;
    const card = {row:rowNum.toString(), 
        col: colNum.toString()};
    console.log(JSON.stringify(card));
    const response = await fetchReq(tempAddress, card);
    //console.log(response);
    return response;
}

async function fetchReq(address, jsonToUse=null, requestType="POST") {
    //need to distinguish between get and post bc get 
    //cannot have a body
    let data, response;
    if(requestType=="GET") {
        response = await fetch(address,{
        method:requestType,
        })
    }
    else {
        response = await fetch(address,{
        method:requestType,
        headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify(jsonToUse)
        })
        
    }
    data = await response.text();
    console.log(data);
    return data;
}

//pseudocode
//prompt on loading page for server ip
//new game button: send POST to ip
//receive game id
//when user clicks a card:
//send POST request with card info
//receive response
//flip card based on response
//document.getElementById("output").innerHTML = "<h2>hi</h2>";
alert("hello");
async function fetchReq() {
    const response = await fetch("http://127.0.0.1:5000/new",{
    method:"POST",
    // headers: {
    //    "Content-Type": "application/json"
    //}
    
    })
    const data = await response.text();
    console.log(data);
}
fetchReq();

//document.getElementById("output").innerHTML = data;//displaying the info

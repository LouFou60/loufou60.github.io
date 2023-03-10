$(".panel").html("The script `testingAPI.js` is working! The API is loading . . .");

const teamsID = ['15165', '15170', '15173', '15188', '15201', '15204', '15206', '15217', '15219', '15233', '15234', '15247', '15252', '15263', '15269', '15270', '15287', '15295', '15308', '15341']

function createDivTeam(teamData){
    var div = document.createElement("div");
    var img = document.createElement("img");

    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "linear-gradient(225deg, #" + teamData.primaryColor + " 0%, #" + teamData.secondaryColor + "100%)";
    // div.style.textShadow = "0px 0px 5px #" + teamData.secondaryColor;
    div.style.borderRadius = "12.5px";
    div.id = "team"
    div.innerHTML = teamData.name;

    img.src = teamData.logo;
    img.style.width = "25px";
    img.style.height = "25px";
    // img.style.filter = "box-shadow(0px 0px 5px #" + teamData.secondaryColor + ")";

    div.appendChild(img);

    document.getElementById("mainTeam").appendChild(div);
}

$.getJSON('../overwatchLeague.json', function(data){
    console.log('Inside the function')

    // for(var key in data){
    //     console.log(key)
    //     console.log(data[key])
    // }

    for(var key in data.teams){
        createDivTeam(data.teams[key])
    }
})
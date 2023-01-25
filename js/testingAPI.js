$(".panel").html("The script `testingAPI.js` is working! The API is loading . . .");

const teamsID = ['15165', '15170', '15173', '15188', '15201', '15204', '15206', '15217', '15219', '15233', '15234', '15247', '15252', '15263', '15269', '15270', '15287', '15295', '15308', '15341']

$.getJSON('../overwatchLeague.json', function(data){
    //This is the function
    console.log('Inside the function')

    for (var key in data[teams]) {
        console.log(key);
        console.log(data[teams][key]);
        console.log(data[teams][key]);
});

// for(i = 0; i < teamsID.length; i=i+1){
//     var currentTeam = $.getJSON('https://us.api.blizzard.com/owl/v1/teams/'+ teamsID[i] +'?access_token=EUlyecleF2k3JU0x5CkqzEyh7A4drJkj8v')
//     var parsedData = JSON.parse(JSON.stringify(currentTeam));
//     alert(parsedData.name);
// }
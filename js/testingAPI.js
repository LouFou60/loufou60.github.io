$(".panel").html("The script `testingAPI.js` is working! The API is loading . . .");

const teamsID = ['15165', '15170', '15173', '15188', '15201', '15204', '15206', '15217', '15219', '15233', '15234', '15247', '15252', '15263', '15269', '15270', '15287', '15295', '15308', '15341']

$.getJSON('../overwatchLeague.json', function(data){
    console.log('Inside the function')

    // for(var key in data){
    //     console.log(key)
    //     console.log(data[key])
    // }

    console.log(data.teams)
})
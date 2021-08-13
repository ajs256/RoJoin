const UUIDexp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
const gameIDexp = new RegExp("/games\/([0-9]+)\/"); 
// need to do it this way because the expression has a //, which js treats as a comment

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var shouldJoin = false;

// Look for a query parameter called 'serverID'. Store its contents in a variable called 'serverID'.
let urlParams = new URLSearchParams(window.location.search);

if(urlParams.has('serverJobID')) {
    serverID = urlParams.get('serverJobID');
    shouldJoin = UUIDexp.test(serverID); // If it's a UUID, we're good to go!
    console.log(`RoJoin: Autojoin: ${shouldJoin}`);
}

if (shouldJoin) { 
    console.log("RoJoin: Starting join process");
    // let's find the game id
    let gameID = window.location.href.match(gameIDexp)[1];
    console.log(`RoJoin: GameID: ${gameID}`);
    // and join!
    // wait for a bit so all of roblox's scripts can load
    console.log(`RoJoin: Joining ${serverID}`);
    while (!Roblox) {
        console.log("Waiting for roblox to init");
        sleep(3000);
    }
    console.log("RoJoin: Joining!")
    Roblox.GameLauncher.joinGameInstance(gameID[0], serverID);
}  



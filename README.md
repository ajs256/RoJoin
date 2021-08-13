# RoJoin
A simple browser extension to join Roblox servers with a query string.

## Installing
Since the extension isn't in browser stores yet, you'll need to install manually. 

1. Click on the green **Code** button above, then **Download ZIP**. 

### For Chrome
2. Extract the ZIP and save it somewhere it won't get deleted.
3. Go to `chrome://extensions`. Turn on developer mode.
4. Drag and drop your folder in.

### For Firefox
2. Go to `about:addons` and choose **Extensions** from the sidebar.
3. Go to the gear menu, then **Install Add-on from File**. Choose the ZIP.

## Creating a Link
The URL is `https://www.roblox.com/games/GAME_ID/?serverJobID=SERVER_JOB_ID`. The JobID can be obtained from [`TeleportService:GetPlayerPlaceInstanceAsync`](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetPlayerPlaceInstanceAsync).

## Need help? Not working?
[Open an issue!](https://github.com/ajs256/RoJoin/issues/new)

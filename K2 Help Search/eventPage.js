var menuItem = {
    "id" : "K2HelpIt",
    "title":"Search on K2 Help",
    "contexts":["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str){
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
};

chrome.contextMenus.onClicked.addListener(function(clickedData){
    if (clickedData.menuItemId == "K2HelpIt" && clickedData.selectionText){
        var k2HelpUrl = "https://help.k2.com/search?q=" + fixedEncodeURI(clickedData.selectionText);
        var searchTab = {
            "url": k2HelpUrl,
            "active": false
        };
        chrome.tabs.create(searchTab);
    }
});
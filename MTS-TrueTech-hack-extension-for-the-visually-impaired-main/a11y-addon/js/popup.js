// document.getElementById('colorBlindButton').addEventListener('click', function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { action: "replaceColorsWithShapes" });
//         chrome.tabs.sendMessage(tabs[0].id, { action: "replaceGradientsWithColors" });
//     });
// });

document.getElementById('decreaseFontSizeButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log('actio1n')
        chrome.tabs.sendMessage(tabs[0].id, { action: "decreaseFontSizeButton" });
    });
});

document.getElementById('increaseFontSizeButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log('action2')
        chrome.tabs.sendMessage(tabs[0].id, { action: "increaseFontSizeButton" });
    });
});

document.getElementById('replaceWithShapesButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "replaceWithShapes" });
    });
});


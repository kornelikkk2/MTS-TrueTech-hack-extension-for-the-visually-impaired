let defaultSize = 14;


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.fontSize) {
        document.querySelectorAll('*').forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                node.style.setProperty('font-size', message.fontSize + 'px', 'important');
            }
        });
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "replaceGradientsWithColors") {
        document.querySelectorAll('*').forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                var computedStyle = window.getComputedStyle(node);
                var background = computedStyle.getPropertyValue('background-image');
                if (background.includes('gradient')) {
                    var backgroundColor = computedStyle.getPropertyValue('background-color');
                    node.style.backgroundImage = 'none';
                    node.style.backgroundColor = backgroundColor;
                }
            }
        });
    }
    if (message.action === "increaseFontSizeButton") {
        ++defaultSize;
        document.querySelectorAll('*').forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                console.log(defaultSize, 'test')
                node.style.setProperty('font-size', defaultSize  + 'px', 'important');
            }
        });
    }
    if (message.action === "decreaseFontSizeButton") {
        --defaultSize;
        document.querySelectorAll('*').forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                console.log(defaultSize, 'test1')
                node.style.setProperty('font-size', defaultSize + 'px', 'important');
            }
        });
    }
    if (message.action === "replaceWithShapes") {
        var elements = document.querySelectorAll('rect');
        elements.forEach(function(element) {
            var price = parseInt(element.getAttribute('data-price'));
            var shapeIndex = getShapeIndexForPrice(price);
            var shape = shapes[shapeIndex];
            element.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' + shape + '</svg>';
        });
    }
});

function getShapeForPrice(price) {
    var priceToShapeIndex = {};
    var shapes = [
        '<circle cx="50" cy="50" r="10" fill="black" />',
        '<rect x="0" y="0" width="20" height="20" fill="black" />',
        '<polygon points="0,0 20,0 10,20" fill="black" />',
        '<circle cx="50" cy="50" r="15" fill="black" />',
        '<rect x="0" y="0" width="25" height="25" fill="black" />',
        '<polygon points="0,0 30,0 15,30" fill="black" />'
    ];

    if (priceToShapeIndex[price] !== undefined) {
        return priceToShapeIndex[price];
    } else {
        var newIndex = Object.keys(priceToShapeIndex).length % shapes.length;
        priceToShapeIndex[price] = newIndex;
        return newIndex;
    }
}


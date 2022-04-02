let alreadyCreated = false;

chrome.tabs.onUpdated.addListener(info => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
        let tab = response[0];
        console.log('youve been font change');

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['/js/key-detect.js']
        });
    });
})

chrome.tabs.onCreated.addListener(info => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
        let tab = response[0];
        console.log('youve been font change');

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['/js/key-detect.js']
        });
    });
    
    randomTab(info);
});

chrome.runtime.onMessage.addListener(msg => {
    if (msg.subject === 'getKeyStroke') {
        if (Math.random() < 0.05) runRandom();
    }

    if (msg.subject === 'getMousePress') {
        runRandom();
    }
})

let randomTab = info => {
    let number = 2;
    switch (number) {
        case 1:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id, () => {
                    console.log('New tab has been created and removed');
                });

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.bing.com/search?q=how+to+set+google+as+default+search+engine&qs=LS&pq=how+to+set+google+as+&sc=8-21&cvid=640E01CBA0A749628172715746A773E6&FORM=QBLH&sp=1'
                }, () => {
                    console.log('went to bing');
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            break;
        case 20:
            break;
    }
}

let runRandom = () => {
    let number = 5;

    switch (number) {
        case 1:
            
            break;
        case 2:
            chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
                let tab = response[0];
                console.log('youve been font change');

                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['/js/font-change.js']
                });
            });
            break;
        case 3:
        case 4:
        case 5:
            chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
                let tab = response[0];
                console.log('youve been gandalfed');

                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['/js/gandalfed.js']
                });
            });
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            break;
        case 16:
        case 17:
        case 18:
        case 19:
            break;
        case 20:
            break;
    }
}

let rollDice = sides => {
    return Math.floor(Math.random() * sides + 1);
}
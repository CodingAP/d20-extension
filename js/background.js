let color = '#3aa757';
let alreadyCreated = false;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onCreated.addListener(info => {
    let number = rollDice(20);

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
            }
            break;
        case 2:
        case 3:
        case 4:
        case 5:

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
});

let rollDice = sides => {
    return Math.floor(Math.random() * sides + 1);
}
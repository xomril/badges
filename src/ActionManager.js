
export default class ActionManager {
    constructor(options) {

        this.tweetLink = options.tweetLink

        if (this.tweetLink === undefined) {
            throw(new Error("You must provide a tweet link"))
        }

        this.action = options.action

        if (this.action === undefined) {
            throw(new Error("You must provide an action"))
        }
        this.actionFile = './actions/' + this.action
        this.createTab()
    }

    createTab() {
        chrome.tabs.create({ url: this.tweetLink }, (tab) => {
            chrome.tabs.executeScript(
                tab.id, {
                    code: "<script type='module' src='" + this.actionFile + "'></script>"
                }
            )
        });

    }
}

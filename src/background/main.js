import ActionManager from '../ActionManager.js'

chrome.runtime.onMessage.addListener(function(message,sender, done){
    new ActionManager({
        tweetLink: message.tweetLink,
        action: message.action
    });
    console.log("Got message")
    console.log(message)
    done();
});

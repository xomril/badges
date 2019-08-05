import ActionManager from "./ActionManager.js";

export default class Client {
    constructor () {
        let that = this;
        this.carets = [];

        $(document).ready(() => {
            console.log("Loading tweets");
            that.runLoader()
        });

    }

    runLoader() {

        let that = this;
        setInterval(() => {
            that.bindTweets()
        }, 2000)
    }

    bindTweets() {
        let that = this;
        $(function() {

            this.carets = $("[data-testid='caret']");
            console.log("processing")
            $.each(this.carets, (index, caret) => {

                if ($(caret).data("extra")) {

                } else {
                    $(caret).attr("data-extra", true)

                    let likeButton = that.createMultiLikeButton()
                    let blockButton = that.createBlockButton()

                    $(likeButton).insertAfter(caret)
                    $(blockButton).insertAfter(caret)
                }

            })
        });
    }

    createBlockButton() {
        let that = this
        let blockButton = $("<Button>Block All</Button>");
        blockButton.css('height', '20px');
        blockButton.css('width', '80px');
        blockButton.css('right', '110px');
        blockButton.css('position', 'absolute');
        blockButton.on("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            that.multiBlock()
        });

        return blockButton
    }
    createMultiLikeButton() {
        let that = this
        let likeButton = $("<Button>Mega Like</Button>");
        likeButton.css('height', '20px');
        likeButton.css('width', '80px');
        likeButton.css('right', '20px');
        likeButton.css('position', 'absolute');
        likeButton.on("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            that.multiLike()
        });
        return likeButton
    }

    multiBlock() {
        let visibleInterval = null

        let tweets = $('div[data-testid="tweet"], article[data-testid="tweetDetail"]').reverse();

        tweets.map((index, tweet) => {

            $($(tweet).find('div[data-testid="caret"]')).trigger("click");
            visibleInterval = setInterval(() => {

                if ($("div[role='menu']").length > 0) {
                    $($("div[role='menuitem']:contains('Block')")[0]).trigger("click")
                    $('[data-testid="confirmationSheetConfirm"]').trigger("click");
                    clearInterval(visibleInterval)
                }

            },20)


        })
    }

    multiLike() {
        let urlScreenName = window.location.href.split("/status")[0].split("com/")[1];
        console.log("selected user:" + urlScreenName)   
        let tweets = $('div[data-testid="tweet"]');
        for(var i=0;i<tweets.length;i++){
           var tweet = $('div[data-testid="tweet"]')[i];
           var screenName = $(tweet).find("a").attr("href").replace("/","");
           console.log("tweet user: " + screenName);
           console.log("is user:" + (screenName===urlScreenName))
            if(screenName===urlScreenName){
                 $(tweet).find('div[data-testid="like"]').click();
            }
           }
    }
}

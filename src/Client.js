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
                    let extraButton = $("<Button>Mega Like</Button>");
                    extraButton.css('height', '20px');
                    extraButton.css('width', '80px');
                    extraButton.css('right', '20px');
                    extraButton.css('position', 'absolute');
                    extraButton.on("click", (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        that.muliLike()
                    });

                    $(extraButton).insertAfter(caret)
                }

            })
        });
    }

    muliLike() {
        let tweets = $('div[data-testid="tweet"], article[data-testid="tweetDetail"]');

        tweets.map((index, tweet) => {
            $($(tweet).find('div[data-testid="like"]')).trigger("click")
        })




    }
}

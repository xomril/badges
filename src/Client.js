
export default class Client {
    constructor () {
        let that = this;
        this.likeButtons = [];

        $(document).ready(() => {
            console.log("Loading tweets")
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
            $.each(this.carets, (index, caret) => {

                if ($(caret).data("extra")) {

                } else {
                    $(caret).attr("data-extra", true)
                    let extraButton = $("<Button>Extra</Button>");
                    extraButton.css('height', '20px');
                    extraButton.css('right', '20px');
                    extraButton.css('position', 'absolute');
                    extraButton.on("click", (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        that.showContextMenu(111111)
                    });
                    $(extraButton).insertAfter(caret)
                }

            })
        });
    }

    showContextMenu(tweetId) {
        alert(tweetId)
    }
}

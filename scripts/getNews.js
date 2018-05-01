// add this to whatever script we use on the news feed
// function to parse rss
$(document).ready(function() {
    //feed to parse
    var feed = "https://comicvine.gamespot.com/feeds/news";

    $.ajax(feed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () { // or "item" or whatever suits your feed
                var el = $(this);
                console.log("------------------------");
                console.log("title      : " + el.find("title").text());
                console.log("link       : " + el.find("link").text());
                console.log("description: " + el.find("description").text());
            });


        }
    });

});
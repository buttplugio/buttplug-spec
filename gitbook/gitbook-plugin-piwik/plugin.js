require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
       _paq.push(['trackPageView']);
    });
});
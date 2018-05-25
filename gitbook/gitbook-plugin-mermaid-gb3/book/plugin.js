require([
  'gitbook'
], function (gitbook) {
  gitbook.events.bind('start', function (e,data) {
      mermaid.initialize(data['mermaid-gb3']);
  })  
  gitbook.events.bind('page.change', function () {
    mermaid.init();
  });
});

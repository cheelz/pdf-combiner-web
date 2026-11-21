function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('AWB + Packing List Combiner')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

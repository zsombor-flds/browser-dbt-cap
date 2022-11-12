// Generate array of content from website
function websiteContent(node) {
  var all = [];
  for (node = node.firstChild; node; node = node.nextSibling) {
      if (node.nodeType == 3) all.push(node);
      else all = all.concat(websiteContent(node));
  }
  return all;
}
// Replace every DBT to dbt 
for (node of websiteContent(document.body)) {
  var originalText = node.nodeValue;
  var text = originalText;
  var replacedText = text.replace('DBT', 'dbt');

  if ((replacedText !== text) && (node.parentNode !== null)) {
      text = replacedText;
  }
  if ((text != originalText) && (node.parentNode !== null)) {
      var element = document.createElement("span");
      element.innerHTML = text;
      node.parentNode.replaceChild(element, node);
  }
}

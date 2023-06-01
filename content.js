const substituteWords = ['Cuzil', 'Cupretil', 'Bostil', 'Pardil', 'Lixil', 'Depressil', 'Macaquil', 'Chipanzil', 'Carioquil', 'Pitibulzil', 'Malcriadil', 'Merdil'];

function replaceText(node) {
  let text = node.nodeValue;
  
  // Replace "Brasil" or "Brazil" with a random substitute word
  const brazilRegex = /Brasil|Brazil/gi;
  text = text.replace(brazilRegex, () => {
    const randomIndex = Math.floor(Math.random() * substituteWords.length);
    return substituteWords[randomIndex];
  });
  
  // Replace "normal" with "normar"
  const normalRegex = /\bnormal\b/gi; 
  text = text.replace(normalRegex, "normar");

  if (text !== node.nodeValue) {
    node.nodeValue = text;
  }
}

function walkDOM(node, callback) {
  if (node) {
    callback(node);
    node = node.firstChild;
    while (node) {
      walkDOM(node, callback);
      node = node.nextSibling;
    }
  }
}

walkDOM(document.body, (node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    replaceText(node);
  }
});

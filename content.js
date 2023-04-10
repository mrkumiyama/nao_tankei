const substituteWords = ['Cuzil', 'Cupretil', 'Bostil', 'Pardil', 'Lixil', 'Depressil', 'Macaquil', 'Chipanzil', 'Carioquil', 'Pitibulzil', 'Malcriadil', 'Merdil'];

function replaceText(node) {
  const regex = /Brasil/gi;
  const text = node.nodeValue;
  const newText = text.replace(regex, () => {
    const randomIndex = Math.floor(Math.random() * substituteWords.length);
    return substituteWords[randomIndex];
  });

  if (newText !== text) {
    node.nodeValue = newText;
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

/**
 * https://www.greatfrontend.com/questions/javascript/text-search-ii
 * @param {string} text
 * @param {Array<string>} queries
 * @return {string}
 */
export default function textSearch(text, queries) {
  if (text.trim() === '') {
    return text;
  }

  const idxArr = Array(text.length).fill(0);

  for (const query of queries) {
    if (query.trim() === '') continue;
    for (let i = 0; i < text.length; i++) {
      const substr = text.slice(i, i + query.length);
      if (substr.toLowerCase() === query.toLowerCase()) {
        idxArr.fill(1, i, i + query.length);
        i += query.length - 1;
      }
    }
  }

  let highlighted = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    const shouldAddOpening = idxArr[i] === 1 && idxArr[i - 1] !== 1;
    const shouldAddClosing = idxArr[i] === 1 && idxArr[i + 1] !== 1;

    if (shouldAddOpening) {
      char = `<b>${char}`;
    } else if (shouldAddClosing) {
      char = `${char}</b>`;
    }
    highlighted += char;
  }

  return highlighted;
}

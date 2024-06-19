/**
 * https://www.greatfrontend.com/questions/javascript/html-serializer
 * Serializes a DOM-like object into a formatted HTML string.
 *
 * @param {Object} element - The DOM-like object to serialize.
 * @param {string} indent - The string used for indentation (default is a tab character).
 * @return {string} - The serialized HTML string.
 */
export default function serializeHTML(element, indent = '\t') {
  function traverse(element, depth = 0) {
    if (typeof element === 'string') {
      return `${indent.repeat(depth)}${element}`;
    }

    const openingTag = `${indent.repeat(depth)}<${element.tag.toLowerCase()}>`;

    const childrenHTML = [];
    for (let i = 0; i < element.children.length; i += 1) {
      childrenHTML.push(traverse(element.children[i], depth + 1));
    }
    const newString = childrenHTML.join('\n');

    const closingTag = `${indent.repeat(depth)}</${element.tag.toLowerCase()}>`;

    return [openingTag, newString, closingTag].join('\n');
  }

  return traverse(element);
}

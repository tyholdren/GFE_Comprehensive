/**
 * https://www.greatfrontend.com/interviews/study/amazon/questions/javascript/get-elements-by-style
 * @param {Element} element
 * @param {string} property
 * @param {string} value
 * @return {Array<Element>}
 */
export default function getElementsByStyle(element, property, value) {
  const results = [];

  function traverse(node) {
    const styleObj = window.getComputedStyle(node);
    const styleValue = styleObj.getPropertyValue(property);
    if (value === styleValue) {
      results.push(node);
    }

    for (const child of node.children) {
      traverse(child);
    }
  }
  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    traverse(children[i]);
  }
  return results;
}

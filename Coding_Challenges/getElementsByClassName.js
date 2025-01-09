/**
 * https://www.greatfrontend.com/interviews/study/amazon/questions/javascript/get-elements-by-class-name
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */
export default function getElementsByClassName(element, classNames) {
  const classes = [];
  const arrOfClasses = classNames.split(' ').filter(Boolean);

  function traverse(node) {
    const elClassNames = [...node.classList];

    const hasClasses = arrOfClasses.every(curClassName =>
      elClassNames.includes(curClassName)
    );
    if (hasClasses) {
      classes.push(node);
    }

    for (const child of node.children) {
      traverse(child);
    }
  }

  for (const child of element.children) {
    traverse(child);
  }

  return classes;
}

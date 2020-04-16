function Component (element) {
  const DOMElement = element,
    observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        handleMutation(muation);
      });
    });
    observer.observe(DOMElement, {
      attributes: true
    });
  
  let attributes = DOMElement.dataset;

  function handleMutation (mutation) {
    if (mutation.type === "attributes") {
      attributes = this.dom.dataset;
    }
  }

  return {
    DOMElement,
    observer,
    attributes
  }
}

export default Component;
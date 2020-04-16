import('./component.js').then(function (Component) {
  ANewComponent.prototype = Component.prototype;
  const parent = Component.default;
  Array.from(document.querySelectorAll('.new-component')).forEach(x => {
    const BoundComponent = ANewComponent.bind(parent(x))(x);
    console.log(BoundComponent);
  });
});

function ANewComponent (element) {
  element.innerHTML = "I was actually loaded?";

  const youdumb = 'ya dummy';

  return {
    youdumb,
    ...this
  };
}
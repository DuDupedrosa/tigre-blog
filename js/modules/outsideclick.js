export default function outsideClick(element, callback) {
  const getHtml = document.documentElement;
  const events = ["click", "touchstart"];
  const attribute = "data-close";

  // function que garante que somente quando
  // ocorrer o click fora da caixa pai vai
  // executar callback
  function offBox(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(attribute);
      events.forEach((evento) => {
        getHtml.removeEventListener(evento, offBox);
      });
      callback();
    }
  }

  // adicionando o evento no html para fazer
  // o click outside mas sempre verificando
  // se possui um atributo ou não para não
  // ficar adicionando vários eventos no html
  if (!element.hasAttribute(attribute)) {
    element.setAttribute(attribute, "");
    events.forEach((evento) => {
      getHtml.addEventListener(evento, offBox);
    });
  }
}

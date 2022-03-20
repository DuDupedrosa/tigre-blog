import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(button, navList, boxContainer, classe) {
    // users preferences
    this.button = document.querySelector(button);
    this.navList = document.querySelector(navList);
    this.boxContainer = document.querySelector(boxContainer);
    this.classe = classe;
    // events
    this.events = ["touchstart", "click"];

    // redirecionamento do this
    this.onMenuMobile = this.onMenuMobile.bind(this);
  }

  // method que add a classe de ativo, toda fez
  // que ocorre o click no button e aciona callback
  // que faz toda verificação de click outside,
  // ocorreu o clique fora da caixa de navegação
  // vai remover a classe de ativo
  onMenuMobile(event) {
    event.preventDefault();
    this.button.classList.add(this.classe);
    this.navList.classList.add(this.classe);
    outsideClick(this.boxContainer, () => {
      this.button.classList.remove(this.classe);
      this.navList.classList.remove(this.classe);
    });
  }

  // add events ao button
  addEventButton() {
    this.events.forEach((evento) => {
      this.button.addEventListener(evento, this.onMenuMobile);
    });
  }

  // method que inicia tudo
  init() {
    if (this.button && this.navList && this.boxContainer) {
      this.addEventButton();
    }
    return this;
  }
}

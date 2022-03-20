import MenuMobile from "./modules/menu-mobile.js";

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="list"]',
  "[data-menu]",
  "active-menu"
);
menuMobile.init();

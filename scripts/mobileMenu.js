class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.header = document.querySelector('.site-header');
        this.events();
    }
    events() {
        this.menuIcon.addEventListener('click', () => this.toggleMenu())
    }
    toggleMenu() {
        this.menuContent.classList.toggle('site-header__menu-content--visible');
        this.header.classList.toggle('header-bg-mobile');
        this.menuIcon.classList.toggle('icon-active');
    }

}

export default MobileMenu;
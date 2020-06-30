class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.siteHeaderLogo = document.querySelector('.site-header__logo');
        this.events();
    }
    events() {
        document.addEventListener('scroll', () => this.runOnScroll())
    }
    runOnScroll() {
        if(window.scrollY > 60) {
            this.siteHeader.classList.add('sticky-header');
            this.siteHeaderLogo.classList.add('modify-logo');
        }
        else {
            this.siteHeader.classList.remove('sticky-header');
            this.siteHeaderLogo.classList.remove('modify-logo');
        }
    }
}
export default StickyHeader;
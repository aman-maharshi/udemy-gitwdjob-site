class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.siteHeaderLogo = document.querySelector('.site-header__logo');
        this.pageSection = document.querySelectorAll('.page-section');
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
        this.pageSection.forEach(item => this.calcSection(item));
    }
    // changing the nav indicator when the page section is scrolled to
    calcSection(item) {
        // if while scrolling top edge of the section has passed and bottom edge has not passed (IF SECTION IS IN THE BROWSERS VIEW PORT)
        if(window.scrollY + window.innerHeight > item.offsetTop && window.scrollY < item.offsetTop + item.offsetHeight) {
            let scrollPercent = (item.getBoundingClientRect().top / window.innerHeight) * 100;
            if(scrollPercent < 18 && scrollPercent > -0.1) {
                let matchingLink = item.getAttribute('data-matching-link');
                let otherLinks = document.querySelectorAll(`ul a[href]:not(${matchingLink})`);
                otherLinks.forEach(el => el.classList.remove('is-active'));
                document.querySelector(matchingLink).classList.add('is-active');   
            }
        }
    }
}
export default StickyHeader;
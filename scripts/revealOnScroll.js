class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature');
        this.hideInitially();
        this.events();
    }
    events() {
        document.addEventListener('scroll', () => {
            this.itemsToReveal.forEach(item => {
                let divPosition = item.getBoundingClientRect().top;
                let windowPosition = window.innerHeight;
                if(divPosition < windowPosition) {
                    item.classList.add('item-visible');
                }
                else {
                    item.classList.remove('item-visible');
                }
            })
        })
    }
    hideInitially() {
        this.itemsToReveal.forEach(item => item.classList.add('item-hidden'));
    }
}

export default RevealOnScroll;
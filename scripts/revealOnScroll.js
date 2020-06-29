class RevealOnScroll {
    constructor(elementsToReveal) {
        this.itemsToReveal = elementsToReveal;
        this.hideInitially();
        this.events();
    }
    events() {
        document.addEventListener('scroll', () => {
            this.itemsToReveal.forEach(item => {
                this.calculateIfScrolledTo(item);      
            })
        })
    }
    calculateIfScrolledTo(item) {
        let scrollPercentage = (item.getBoundingClientRect().top / window.innerHeight) * 100
        if(scrollPercentage < 80) {
            item.classList.add('item-visible');
        }
        else {
            item.classList.remove('item-visible');
        }
    }
    hideInitially() {
        this.itemsToReveal.forEach(item => item.classList.add('item-hidden'));
    }
}

export default RevealOnScroll;
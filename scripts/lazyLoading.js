class LazyLoading {
    constructor() {
        this.lazyLoad();
    }
    lazyLoad() {
        const images = document.querySelectorAll('[data-src]');
        const imgOptions = {};
        const imgObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                }
                else {
                    this.preloadImage(entry.target);
                    imgObserver.unobserve(entry.target);
                }
            })
        }, imgOptions)
        
        images.forEach(image => {
            imgObserver.observe(image);
        })
    }
    preloadImage(img) {
        const src = img.getAttribute('data-src');
        if(!src) {
            return;
        }
        else {
            img.src = src;
        }
    }
}

export default LazyLoading;
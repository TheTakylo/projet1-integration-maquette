let links = document.querySelectorAll('#header .container nav ul li');
let servicesButton = document.querySelector('#slider .slider-item .slider-item-content a.button');


servicesButton.addEventListener('click', e => {
    e.preventDefault();
    SimpleScroll.scrollTo('#services', 1000, -100);
})

let disableSpy = null;

links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        disableSpy = link.querySelector('a').getAttribute('href');
        links.forEach(item => { item.classList.remove('active') });
        link.classList.add('active');
        SimpleScroll.scrollTo(link.querySelector('a').getAttribute('href'), 1000, -100);
    });
});

let portfolioLinks = document.querySelectorAll('#portfolio .container .portfolio-navigation ul li');
let portfolioItems = document.querySelectorAll('#portfolio .container .portfolio-items figure')

portfolioLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        portfolioLinks.forEach(function (link) { link.classList.remove('active') });
        link.classList.add('active');
        
        let group = link.getAttribute('data-category');
        
        if (group == '*') {
            portfolioItems.forEach(item => { item.classList.remove('disabled') })
        } else {
            portfolioItems.forEach(item => {
                if (item.getAttribute('data-group') == group) return item.classList.remove('disabled');
                
                item.classList.add('disabled')
            })
        }
        
    });
});

let elements = ['#slider', '#services', "#portfolio", "#contact"];
let scrollspy = new SimpleScrollSpy(elements);
let current = null;

scrollspy.watch(element => {
    
    if (element !== current) {
        current = element;
        
        if (disableSpy !== null) {
            if ('#' + element.getAttribute('id') === disableSpy) {
                disableSpy = null;
            }

            return;
        }
        
        let id = '#' + current.getAttribute('id');
        links.forEach(link => {
            
            if (link.querySelector('a').getAttribute('href') !== id) {
                link.classList.remove('active');
            } else {
                link.classList.add('active');
            }
        });
    }
});

let slides = (document.querySelectorAll('#slider .slides .slide').length) - 1;
let currentSlide = 0;

let prevButton = document.querySelector('#slider .arrow.arrow-prev');
let nextButton = document.querySelector('#slider .arrow.arrow-next');

prevButton.addEventListener('click', function (e) {
    updateSlide(currentSlide - 1);
});

nextButton.addEventListener('click', function (e) {
    updateSlide(currentSlide + 1);
});

updateSlide(0);

function updateSlide(slide) {
    if (slide < 0) {
        slide = slides;
    }
    if (slide > slides) {
        slide = 0;
    }
    
    updateProgress(slide, slides);
    
    document.querySelectorAll('#slider .slides .slide')[currentSlide].classList.remove('current');
    currentSlide = slide;
    document.querySelectorAll('#slider .slides .slide')[currentSlide].classList.add('current');
}

function updateProgress(current, total) {
    let percent = (current / total) * 100;
    
    if (percent === 0) percent = 25;
    
    document.querySelector('#slider .progress').style.width = percent + '%';
}
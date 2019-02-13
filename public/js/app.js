let links = document.querySelectorAll('#header .container nav ul li');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        links.forEach((link) => { link.classList.remove('active') });
        
        link.classList.add('active');
        
        let target = link.querySelector('a').getAttribute('href');
        SimpleScroll.scrollTo(target, 1000, -100);
    });
});

let portfolioLinks = document.querySelectorAll('#portfolio .container .portfolio-navigation ul li');

portfolioLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        portfolioLinks.forEach(function(link) { link.classList.remove('active') });
        
        link.classList.add('active');
    });
});

let elements = ['#slider', '#services', "#portfolio", "#contact"];
let scrollspy = new SimpleScrollSpy(elements);
let current = null;
scrollspy.watch(element => {

    if(element !== current) {
        current =  element;
        
        let id = '#'+ current.getAttribute('id');
        
        links.forEach(link => { 
            
            if(link.querySelector('a').getAttribute('href') !== id) {
                link.classList.remove('active');
            } else {
                link.classList.add('active');
            }
        });
    }

});

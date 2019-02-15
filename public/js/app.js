let links = document.querySelectorAll('#header .container nav ul li');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        SimpleScroll.scrollTo(link.querySelector('a').getAttribute('href') , 1000, -100);
    });
});

let portfolioLinks = document.querySelectorAll('#portfolio .container .portfolio-navigation ul li');
let portfolioItems = document.querySelectorAll('#portfolio .container .portfolio-items figure')

portfolioLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        portfolioLinks.forEach(function(link) { link.classList.remove('active') });
        link.classList.add('active');
        
        let group = link.getAttribute('portfolio-group');
        
        if(group == '*') {
            portfolioItems.forEach(item => { item.classList.remove('disabled')} )
        } else {
            portfolioItems.forEach(item => {
                if(item.getAttribute('group') == group) return item.classList.remove('disabled');

                item.classList.add('disabled') 
            }) 
        }
        
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
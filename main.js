(function(){
    //MENU
    var $body = document.querySelector('body')
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__BtnMenu',
        widthEnable: 1024
    })

    //CARROSEL DE IMAGENS
    var carouselImg = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
     })

     //CARROSEL DEPOIMENTOS
     var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
     })
})()





$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__logo").toggleClass("header__logo--hide")
        $(".header__data").toggleClass("header__data--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--middle")
        $(".header__line:nth-child(3)").toggleClass("header__line--last")
    })

})





$(document).ready(function (){
    $(".popup__close").click(function(){
        $(".popup").toggleClass("popup--hide")
        
    })
    $(".header__buttonlink").click(function(){
        $(".popup").removeClass("popup--hide")
    })

    $(".popup__background").click(function(){
        $(".popup").addClass("popup--hide")
    })

    $(".header__mail").click(function(){
        $(".popup").removeClass("popup--hide")
    })

    $(".leave__get").click(function(){
        $(".popup").removeClass("popup--hide")
    })


})



$(document).ready(function(){
    $(".quality__titleblock").click(function(){
        if ($(this).siblings(".quality__text").hasClass("quality__text--open")){
            $(this).siblings(".quality__text").removeClass("quality__text--open")
            $(this).removeClass("quality__titleblock--open")
            
        } else {
            $(".quality__text").removeClass("quality__text--open")
            $(this).siblings(".quality__text").addClass("quality__text--open")
            $(".quality__titleblock").removeClass("quality__titleblock--open")
            $(this).addClass("quality__titleblock--open")
           
        }
        
    })
})
$(document).ready(function(){
    $(".slider__main").slick({
        prevArrow:".slider__arrow--prev",
        nextArrow:".slider__arrow--next"

    })
})


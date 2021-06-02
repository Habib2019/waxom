//venobox
$(document).ready(function () {
    $('.venobox').venobox();
});

// mixitup
// Declare container for mixitup.
var container = document.querySelector('[data-ref="container"]');
// Declare filter select element.
var filterCollection = document.querySelector('[data-ref="select-collection"]');
// Declare keyup timeout.
var keyupTimeout;
var mixer = mixitup(container, {
    selectors: {
        target: '[data-ref~="target"]'
    }
});


// types js

$(".typed").typed({
    strings: ["Portfolio", "Business/Corporate", "Ecommerce", "Newspaper/Blog",],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { }
});


// counterup
$(document).ready(function ($) {
    $('.count-number').counterUp({
        delay: 10,
        time: 10000
    });
});


// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 200) {
        $('.menu').addClass('fixed_menu');
    } else {
        $('.menu').removeClass('fixed_menu');
    }
});

/* Set to do semething based on scroll */
class Scroll {
    static init() {
        $(window).scroll(function() {
            // $('nav').toggleClass('active', $(this).scrollTop() > 50);
        });
    }
}

export default Scroll;

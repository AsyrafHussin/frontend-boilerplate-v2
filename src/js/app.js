// Global Import
window.jQuery = window.$ = require("jquery");
import "bootstrap";

// import module
import Scroll from "./modules/scroll.js";

jQuery(function() {
    Scroll.init();
});

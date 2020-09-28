// Global Import
window.jQuery = window.$ = require("jquery");
import "bootstrap";

// import module
import { Scroll } from "./modules";

jQuery(function() {
    Scroll.init();
});

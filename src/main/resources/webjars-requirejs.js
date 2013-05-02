/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'jasny-bootstrap': [ 'webjars!bootstrap.js' ]
    }
});

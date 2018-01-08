javascript: (function() {
    var site = '/boka-resa-hotell';
    if (window.location.href.indexOf('ving.no') >= 0 || window.location.href.indexOf('vingno') >= 0) {
        site = '/bestill-reise-hotell';
    } else if (window.location.href.indexOf('spies') >= 0) {
        site = '/bestil-charterrejse-hotelvalg';
    } else if (window.location.href.indexOf('tjareborg') >= 0) {
        site = '/varaa-matka-hotelli';
    }
    window.location.pathname = site;
})()

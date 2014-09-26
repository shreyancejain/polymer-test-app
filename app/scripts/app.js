(function (document) {
    'use strict';

    var tabs = document.querySelector('paper-tabs');
    var list = document.querySelector('post-list');

    tabs.addEventListener('core-select', function() {
        list.show = tabs.selected;
    });
    document.addEventListener('polymer-ready', function () {
        // Perform some behaviour
        console.log('Polymer is ready to rock!');
    });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));

'use strict';

module.exports = {
    load() {},

    unload() {},

    messages: {
        'open' () {
            Editor.Panel.open('node-editor');
        }
    },
};
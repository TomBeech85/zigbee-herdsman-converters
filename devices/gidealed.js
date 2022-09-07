const extend = require('../lib/extend');

module.exports = [
    {
        zigbeeModel: ['A11'],
        model: 'ZC05M',
        vendor: 'GIDEALED',
        description: 'Smart Zigbee RGB LED strip controller',
        extend: extend.light_onoff_brightness_colortemp_color({supportsHS: true, colorTempRange: [153, 500]}),
    }, 
    {
        zigbeeModel: ['TS0505B'],
        model: 'C05Z',
        vendor: 'GIDEALED',
        description: 'Zigbee 3.0 RGBCCT LED Controller',
        extend: extend.light_onoff_brightness_colortemp_color({supportsHS: true, colorTempRange: [153, 500]}),
    },
];

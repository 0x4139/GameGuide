cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.smartmobilesoftware.inappbilling/www/inappbilling.js",
        "id": "com.smartmobilesoftware.inappbilling.InAppBillingPlugin",
        "clobbers": [
            "inappbilling"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.smartmobilesoftware.inappbilling": "3.0.0",
    "org.apache.cordova.device": "0.2.12-dev",
    "org.apache.cordova.console": "0.2.11-dev"
}
// BOTTOM OF METADATA
});
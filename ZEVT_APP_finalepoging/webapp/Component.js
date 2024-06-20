sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZEVT_APPZEVT_APP/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ZEVT_APPZEVT_APP.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
	/*	init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}*/
		 init: function () {
                debugger;
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
 
                // enable routing
               /* this.getRouter().initialize();*/
 
                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                var sUrl = "/sap/opu/odata/sap/ZEVT_APP_SRV/";
                var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
                sap.ui.getCore().setModel(oModel);
               
            }
 
	});
});
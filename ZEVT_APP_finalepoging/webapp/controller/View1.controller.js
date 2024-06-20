/*sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZEVT_APPZEVT_APP.controller.View1", {

	});
});*/

var that;
var oSomePage;
var user;
var id;
var ccountry1d;
var voucher_id;
sap.ui
	.define(
		["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
			"sap/ui/core/ValueState", "sap/m/MessageToast",
			"sap/ui/core/message/Message"
		],
		function(Controller, JSONModel, ValueState, Validator) {
			"use strict";
			return Controller
				.extend(
					"ZEVT_APPZEVT_APP.controller.View1", {
						/**
						 * Called when a controller is
						 * instantiated and its View controls
						 * (if available) are already created.
						 * Can be used to modify the View before
						 * it is displayed, to bind event
						 * handlers and do other one-time
						 * initialization.
						 * 
						 * @memberOf zfellow.fellow
						 */
						onInit: function() {
							that = this;
							/* that.setHeader(); */
							// var omodelYear = new
							// sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZFND_CLASH_SRV/",
							// true);
							// var oheader = {
							// 'DataServiceVersion': '2.0'
							// };
							// omodelYear.oHeaders = oheader;
							// var mymodelYear = new
							// sap.ui.model.json.JSONModel();
							// omodelYear.read("/ZyearSet?$filter=(Year
							// eq '"+eyear+"' and Session eq
							// '"+eSession+"')", {
							// success: function(oData,
							// oResponse) {
							// debugger;
							// mymodelYear.setData(oData);
							// that.getView().setModel(mymodelYear,
							// "sections");
							// /*var url =
							// "https://icap-staging.biafotech.com/api/getMemberInfo/"
							// + crno
							// var header = new
							// sap.ui.model.json.JSONModel(url);
							// that.getView().setModel(header,
							// "header1");*/
							// }
							// });
							var omodelYS = new sap.ui.model.odata.ODataModel(
								"/sap/opu/odata/sap/ZEVT_APP_SRV/",
								true);
							var oheader = {
								'DataServiceVersion': '2.0'
							};
							omodelYS.oHeaders = oheader;
							this.getView().setModel(omodelYS);
						},
						findClashes: function() {
								debugger;
								var eevt = that.getView().byId(
									"eevt").getSelectedKey();
								if (eevt == "") {
									var eevt = that.getView().byId(
										"eevt").getValue();
								}
								var eSession = that.getView().byId(
										"eSession")
									.getSelectedKey();
								if (eSession == "") {
									var eSession = that.getView().byId(
										"eSession").getValue();
								}
								var time = that.getView().byId(
									"tbdaytime").getValue();

								var date = that.getView().byId(
									"date").getValue();

								var desc = that.getView().byId(
									"desc").getValue();

								var aFilters = [];
								aFilters
									.push(new sap.ui.model.Filter(
										"Event",
										sap.ui.model.FilterOperator.Contains,
										eevt));
								aFilters
									.push(new sap.ui.model.Filter(
										"Session",
										sap.ui.model.FilterOperator.Contains,
										eSession));
								aFilters
									.push(new sap.ui.model.Filter(
										"Time",
										sap.ui.model.FilterOperator.Contains,
										time));
								aFilters
									.push(new sap.ui.model.Filter(
										"Desc",
										sap.ui.model.FilterOperator.Contains,
										desc));
								aFilters
									.push(new sap.ui.model.Filter(
										"Date",
										sap.ui.model.FilterOperator.Contains,
										date));

								var sec_model = new sap.ui.model.odata.ODataModel(
									"/sap/opu/odata/sap/ZEVT_APP_SRV/",
									true);
								var oheader = {
									'DataServiceVersion': '2.0'
								};
								sec_model.oHeaders = oheader;
								var model_sec = new sap.ui.model.json.JSONModel();

								sec_model
									.read(
										"/ZEVT_APPSet", {
											filters: aFilters,
											success: function(
												oData,
												response) {
												debugger;
												/*that = this;*/
												var oModel = that.getView().getModel("zevt_sess");

												model_sec
													.setData(oData);
												that
													.getView()
													.setModel(
														model_sec,
														"zevt_sess");
											}
										});

							}
							/*	timeFormate: function(oValue) {
									var splitVal = oValue.split(" ");
									var hoursStart = splitVal[1].substring(0, 2);
									var minStart = splitVal[1].substring(2, 4);

									var hoursEnd = splitVal[2].substring(0, 2);
									var minEnd = splitVal[2].substring(2, 4);

									return splitVal[0] + ' ' + hoursStart + ':' + minStart + ' ' + hoursEnd + ':' + minEnd;
								}*/

					});
		});
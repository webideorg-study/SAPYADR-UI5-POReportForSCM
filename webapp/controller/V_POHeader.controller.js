sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("POReportForSCM.controller.V_POHeader", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf POReportForSCM.view.V_POHeader
		 */ //	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf POReportForSCM.view.V_POHeader
		 */ //	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf POReportForSCM.view.V_POHeader
		 */ //	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf POReportForSCM.view.V_POHeader
		 */ //	onExit: function() {
		//
		//	}
		/**
		 *@memberOf POReportForSCM.controller.V_POHeader
		 */
		GoToPODetail: function(oEvent) {

			// Now Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

/*			// 方式 1
			// Get Property of the Clicked Item. i.e. PO number of the item which was clicked
			var selectPO = oEvent.getSource().getBindingContext().getProperty("SalesOrderID");

			// Tell the Router to Navigate To Route_PODetail which is linked to V_PODetail view
			oRouter.navTo("Target_PODetail", {
				SelectedItem: selectPO
			});*/

			// 方式 2
			var sPath = oEvent.getSource().getBindingContext().getPath();

			//console.log(sPath);
			//console.log(encodeURIComponent(sPath));

			oRouter.navTo("Target_PODetail", {
				SelectedItem: encodeURIComponent(sPath)
			});
			
		}

	});
});
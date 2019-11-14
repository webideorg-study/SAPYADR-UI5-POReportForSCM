sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("POReportForSCM.controller.V_PODetail", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf POReportForSCM.view.V_PODetail
		 */
		onInit: function() {
			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Validate/Match the Router Details sent from source using oRouter.navTo("Router_Detail", {SelectedItem: selectPO});
			oRouter.getRoute("Target_PODetail").attachMatched(this._onRouteFound, this);
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf POReportForSCM.view.V_PODetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf POReportForSCM.view.V_PODetail
		 */
		//	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf POReportForSCM.view.V_PODetail
		 */
		//	onExit: function() {
		//
		//	}

		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function(oEvent) {
			var oArgument = oEvent.getParameter("arguments");
			var oView = this.getView();

			/*
			// 方式 1
			oView.bindElement({
				path: "/SalesOrderSet('" + oArgument.SelectedItem + "')"
			});
			*/

			// 方式 2
			//getParameters(arguments) -- key-value pair
			var sPath = decodeURIComponent(oArgument.SelectedItem);
			oView.bindElement({
				path: sPath
			});
		},

		/**
		 *@memberOf POReportForSCM.controller.V_PODetail
		 */
		GoToPOHeader: function(oEvent) {
			var oHistory = sap.ui.core.routing.History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			// Go one screen back if you find a Hash
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} // If you do not find a correct Hash, go to the Source screen using default router;
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Target_POHeader", true);
			}
		},

		/**
		 *@memberOf POReportForSCM.controller.V_PODetail
		 */
		GoToPOItem: function(oEvent) {
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// 方式一
			//console.log(oEvent.getSource());
			//var SelectedPO = oEvent.getSource().getBindingContext().getProperty("SalesOrderID");
			//var SelectedPO = oEvent.getSource().getBindingContext().getObject().SalesOrderID;

			// 方式二
			var SelectedPO = oEvent.getSource().getBindingContext().getObject().SalesOrderID;
			console.log(SelectedPO);

			oRouter.navTo("Target_POItem", {
				SelectedPO: SelectedPO
			});
			
		}

	});
});
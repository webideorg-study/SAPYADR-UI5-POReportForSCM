sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("POReportForSCM.controller.V_POItem", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf POReportForSCM.view.V_POItem
		 */
		onInit: function() {
			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Validate/Match the Router Details sent from source using oRouter.navTo("Router_Detail", {SelectedItem: selectPO});
			oRouter.getRoute("Target_POItem").attachMatched(this._onRouteFound, this);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf POReportForSCM.view.V_POItem
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf POReportForSCM.view.V_POItem
		 */
		//	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf POReportForSCM.view.V_POItem
		 */
		//	onExit: function() {
		//
		//	}

		_onRouteFound: function(oEvent) {
			// var oArgument = oEvt.getParameter("arguments");
			// var lv_belnr = oArgument.p_belnr;
			// var lv_bukrs = oArgument.p_bukrs;
			// var lv_gjahr = oArgument.p_gjahr;
			// var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZGW_VIM_APP2_SRV/");
			// this.getView().setModel(oModel);
			// var filters = new sap.ui.model.Filter({
			// 	and: true,
			// 	filters: [new sap.ui.model.Filter("Belnr", sap.ui.model.FilterOperator.EQ, lv_belnr),
			// 		new sap.ui.model.Filter("Bukrs", sap.ui.model.FilterOperator.EQ, lv_bukrs),
			// 		new sap.ui.model.Filter("Gjahr", sap.ui.model.FilterOperator.EQ, lv_gjahr)
			// 	]
			// });
			// var binding = this.byId("list").getBinding("items");
			// binding.filter(filters);
			var SelectedPO = oEvent.getParameter("arguments").SelectedPO;
			console.log(SelectedPO);
			var oFilter = new sap.ui.model.Filter("SalesOrderID", sap.ui.model.FilterOperator.EQ, SelectedPO);

			// 方式 1
			var oBinding = this.getView().byId("it_item").getBinding("items");

			// 方式 2 -- 不适合这，这里不是本身的事件触发 
			//var oBinding = oEvent.getSource().getBinding("items");
			
			oBinding.filter(oFilter);
		},

		/**
		 *@memberOf POReportForSCM.controller.V_POItem
		 */
		GoToPoDetail: function(oEvent) {
			var oHistory = sap.ui.core.routing.History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			// Go one screen back if you find a Hash
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} // If you do not find a correct Hash, go to the Source screen using default router;
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Target_PODetail", true);
			}
		}

	});
});
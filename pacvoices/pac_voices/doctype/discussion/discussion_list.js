// Copyright (c) 2022, Kahanamona Team and contributors
// For license information, please see license.txt

frappe.listview_settings['Discussion'] = {
    hide_name_column: true,
    add_fields: ["published", "title"],

	get_indicator: function(doc) {
		if(doc.published) {
			return [__("Published"), "green", "published,=,Yes"];
		} else {
			return [__("Not Published"), "gray", "published,=,Yes"];
		}
	},
    refresh: function(frm) {
		
		if (!in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor')){
			frm.page.sidebar.hide(); // this removes the sidebar
			$(".form-footer").hide();
			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-12");
		}

		if (in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor')){
			frm.page.sidebar.show(); // this removes the sidebar
			$(".form-footer").show();
			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-10");
		}
	},

}


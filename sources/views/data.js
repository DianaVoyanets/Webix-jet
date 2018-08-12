import Settings from "views/settings";
import CountriesDataTable from "views/countries_datatable";
import StatusesDataTable from "views/statuses_datatable";

export default class Data extends Settings {
	config() {
		var side = {
			view: "list",
			localId: "list", 
			select: true,
			on:{
				onAfterSelect: (id) => {
					this.$$(id).show();
				}
			},
			data: [
				{id:"Countries",name: "Countries",value:webix.i18n.data.Countries},
				{id:"Statuses",name:"Statuses",value:webix.i18n.data.Statuses}
			],
			width: 300
		};
        
		var dataToolbar = {
			view: "toolbar",
			height:50, 
			elements: [
				{view: "label",label: webix.i18n.data.Datas,name:"Data",css:"data_label"}
			]
		};

		var main = {
			cells: [ 
				{ id:"Countries",cols:[CountriesDataTable]},
				{ id:"Statuses",cols: [StatusesDataTable]},
			]};

		var ui = {
			rows: [
				dataToolbar,
				{cols: [
					side,
					main
				]}
			]
			
		};
		return ui;
	}

}
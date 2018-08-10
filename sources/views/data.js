import Toolbar from "views/toolbar";
import {JetView} from "webix-jet";
import CountriesDataTable from "views/countries_datatable";
import StatusesDataTable from "views/statuses_datatable";

export default class Data extends JetView {
	config() {
		var side = {
			view: "list",
			localId: "mylist", 
			select: true,
			on:{
				onAfterSelect: (id) => {
					this.$$(id).show();
				}
        
			},
			data: [ "Countries", "Statuses" ],
			width: 300
		};

		var main = {
			cells: [ 
				{ id:"Countries",cols:[CountriesDataTable]},
				{ id:"Statuses",cols: [StatusesDataTable]},
			]};

		var ui = {
			rows: [
				{$subview: Toolbar},
				{cols: [
					side,
					main
				]}
			]
			
		};
		return ui;
	}

}
import {JetView} from "webix-jet";

export default class Datatable extends JetView {
	config() {
		var dataTable = {
			rows: [{
				editable: true,
				localId: "dataTable",
				select: true,
				view: "datatable",
				autoConfig: true,
				columns: [
					{ id:"id",header:"",sort:"string",editor:"text"},
					{ id:"Name",header:"Name",sort:"string",editor:"text"},
				]   
			},
			{ view: "button",value: "Add new",click:() => this.add()},
			{ view: "button",value: "Delete selected",click:() => {
				this.deleteSelectedItem();
			}}
			]
		};
		return dataTable;
	}
	deleteSelectedItem() {
		var selected =  this.getRoot().queryView({view:"datatable"}).getSelectedId();
		if(selected) this.getRoot().queryView({view:"datatable"}).remove(selected);
	}

}
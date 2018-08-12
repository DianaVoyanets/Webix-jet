import Settings from "views/settings";

export default class Datatable extends Settings {
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
			{ view: "button",value: webix.i18n.datatable.Add,click:() => this.add()},
			{ view: "button",value:webix.i18n.datatable.Delete,click:() => this.remove()}
			]
		};
		return dataTable;
	}

}
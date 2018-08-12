import Settings from "views/settings";

export default class Datatable extends Settings {
	config() {
		// webix.i18n.locales["en-US"]={
		// 	Add: "Add",
		// 	Delete: "Delete"
		// };
    
		// webix.i18n.locales["ru-RU"]={
		// 	Add: "Добавить",
		// 	Delete: "Удалить"
		// };
        
		//webix.i18n.setLocale("ru-RU");

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
			{ view: "button",name: "Add",value: webix.i18n.datatable.Add,click:() => this.add()},
			{ view: "button",name: "Delete",value:webix.i18n.datatable.Delete,click:() => {
				this.remove();
			}}
			]
		};
		return dataTable;
	}

}
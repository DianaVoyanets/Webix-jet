import Datatable from "views/datatable";
import { statuses_collection } from "models/statuses_collection";


export default class StatusesDataTable extends Datatable {
   
	init() {
		var dataTable = this.getRoot().queryView({view:"datatable"});
		dataTable.config.columns[1].header = "Icon";
		dataTable.sync(statuses_collection);
	}

	add() {
		statuses_collection.add({"Name":"Busy","Icon":"cogs"});
	}
    
	remove() {
		var selected = this.getRoot().queryView({view:"datatable"}).getSelectedId();
		if(selected) {
			statuses_collection.remove(selected);
		}
	}
}
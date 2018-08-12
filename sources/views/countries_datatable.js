import Datatable from "views/datatable";
import {countries_collection} from "models/countries_collection";

export default class CountriesDataTable extends Datatable {
	init() {
		var countiesDatatable = this.getRoot().queryView({view:"datatable"});
		countiesDatatable.sync(countries_collection);
		countiesDatatable.config.columns[1].header = "Name";
	}

	add() {
		countries_collection.add({"Name":"Belarus"});
	}
    
	remove() {
		var selected = this.getRoot().queryView({view:"datatable"}).getSelectedId();
		if(selected) {
			countries_collection.remove(selected);
		}
		else return;
	}
    
}
    


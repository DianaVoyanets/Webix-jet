import Datatable from "views/datatable";
import {countries} from "models/countries";

export default class CountriesDataTable extends Datatable {
	init() {
		this.getRoot().queryView({view:"datatable"}).parse(countries);
		this.getRoot().queryView({view:"datatable"}).config.columns[1].header = "Name";
    }

    add() {
        this.getRoot().queryView({view:"datatable"}).add({Name:"Belarus"});
    }
    
}


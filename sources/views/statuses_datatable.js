import Datatable from "views/datatable";
import { statuses } from "models/statuses";


export default class StatusesDataTable extends Datatable {
   
init() {
    this.getRoot().queryView({view:"datatable"}).parse(statuses);
    this.getRoot().queryView({view:"datatable"}).config.columns[1].header = "Icon";
}

add() {
    this.getRoot().queryView({view:"datatable"}).add({Name:"Busy"});
}
};
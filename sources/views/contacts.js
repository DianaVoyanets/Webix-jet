import {JetView} from "webix-jet";
import Toolbar from "views/toolbar";
import Form from "views/form";
import {user_collection} from "models/users_collection";

export default class Contacts extends JetView {
	config() {
		var contacts_list = {
			rows: [ Toolbar, {
				view: "list",
				template:"<div>#Name#<i class='fa fa-close'></i><br>#Email#</div>",
				id: "mylist",
        	    select: true,
				css:"contacts_list",
				on: {
					onAfterSelect: (id) => {
						this.show("../contacts?id="+id);
					}
				},
        	    onClick: {
        		    "fa-close": function(e,id) {
        			    this.remove(id);
        		    }
				}
			},
			{
				view:"button",
				value:"Add",
				click:() => {
					this.show("../contacts?id=add");
				}
			}]
		};
        
		var ui = {
			rows: [
				{ 
					cols: [
						contacts_list,
						Form
					]
				},
			]
		};
        
		return ui;
	}
    
	init() {
		this.$$("mylist").parse(user_collection);
		this.on(this.app, "onDataUpdate", (data) => {
			if (data) {
				user_collection.updateItem(data.id, data);
			}
		});
        
	}
}

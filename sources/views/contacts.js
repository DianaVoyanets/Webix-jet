import Settings from "views/settings";
import Toolbar from "views/toolbar";
import Form from "views/form";
import {user_collection} from "models/contacts_collection";

export default class Contacts extends Settings {
	config() {
		var contacts_list = {
			rows: [ Toolbar, {
				view: "list",
				template:"<div>#Name#<i class='fa fa-close'></i><br>#Email#</div>",
				localId: "mylist",
        	    select: true,
				css:"contacts_list",
				on: {
					"onAfterSelect": (id) => {
						var path = "contacts?id="+id;
						webix.delay(()=>{
							this.show(path);
						});
						
					}
				},
        	    onClick: {
        		    "fa-close": function(e,id) {
        			    user_collection.remove(id);
        		    }
				}
			},
			{
				view:"button",
				value:webix.i18n.contacts.Add,
				click:() => {
					user_collection.add({"Name":"Alex Wanny","Email":"alex@gmail.com","Status":1,"Country":2});
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
		this.$$("mylist").sync(user_collection);
	}

	urlChange(view) {
		user_collection.waitData.then(()=>{
			var id = this.getParam("id") || user_collection.getFirstId();
			if(user_collection.exists(id)) {
				view.queryView({view:"list"}).select(id);
			}
		});
		
	}
}


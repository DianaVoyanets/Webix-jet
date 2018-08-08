import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import Toolbar from "views/toolbar";

export default class Contacts extends JetView {
	config() {
		var contacts_list = {
			view: "list",
			template:"<div>#Name#<i class='fa fa-close'></i><br>#Email#</div>",
			id:"mylist",
			select: true,
			css:"contacts_list",
				onClick: {
					"fa-close": function(e,id) {
						$$("mylist").remove(id);
					}
				}
		}

		var contacts_form = {
			view: "form",
			id:"myform",
			elements:[
				{view:"text",label: "User name",name:"Name",width: 300},
				{view:"text",label: "Email",name:"Email",width: 300},
				{view: "spacer"}
			]	
		}

		var ui = {
			rows: [
				Toolbar,
				{ cols: [
					contacts_list,
					contacts_form
				]
			}
		  ]
		}
		return ui;
	}

	init(view) {
		view.queryView({ view: "list" }).parse(contacts);
		$$("myform").bind($$("mylist"));
	}
}
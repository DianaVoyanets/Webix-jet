import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import Toolbar from "views/toolbar";

export default class Contacts extends JetView {
	config() {
		return {
		rows:[
			Toolbar,
			{cols:[
				{
					view:"list",
					template:"<div>#Name#<i class='fa fa-close'></i><br>#Email#</div>",
					id:"mylist",
					select: true,
					css:"contacts_list",
						onClick: {
							"fa-close": function(e,id) {
								$$("mylist").remove(id);
							}
						}
				},
				{
					view: "form",
					id:"myform",
					elements:[
						{view:"text",label: "User name",name:"Name",width: 300},
						{view:"text",label: "Email",name:"Email",width: 300},
						{view: "spacer"}
					]	
				},
			]
		},
	  ] 	
	 }
	}
	init(view) {
		view.queryView({view:"list"}).parse(contacts);
		$$("myform").bind($$("mylist"));
	}
}
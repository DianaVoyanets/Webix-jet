import {JetView} from "webix-jet";
import {user_collection} from "models/users_collection";

export default class Form extends JetView {
	config() {
		return { 
			view: "form",
			id: "myform",
			elements: [
				{ view: "text", label:"Name",name:"Name",width: 300 },
				{ view: "text", label:"Email",name:"Email",width: 300 },
				{ view: "combo",label:"Country",options: { body:{template:"#Country#",data:user_collection}}},
				{ view: "combo",label:"Status",options: { body:{template:"#Status#",data:user_collection}}},
				{ view: "spacer"},
				{ view: "button", value:"Update",
					click: () => {
						const values = this.getRoot().getValues();
						this.app.callEvent("onDataUpdate", [values]);
					}
				},
				{view: "button",value:"AddNew",click:()=>this.$$("myform").clear()}
			]
		};
	}
	urlChange(view) {
		var id = this.getParam("id");
		if(id == 1 || id ==2) {
			view.setValues(user_collection.getItem(id));
		}
		if(id == "add") {
			const values = this.getRoot().getValues();
			user_collection.add(values);
		}
	}
}
import {user_collection} from "models/contacts_collection";
import {countries_collection} from "models/countries_collection";
import{statuses_collection} from "models/statuses_collection";
import Settings from "views/settings";

export default class Form extends Settings {
	config() {
		return { 
			view: "form",
			localId: "myform",
			elements: [
				{ view: "text", label:webix.i18n.form.Name,name:"Name",width: 300},
				{ view: "text", label:webix.i18n.form.Email,name:"Email",width: 300 },
				{ view: "combo",label:webix.i18n.form.Country,name:"Country",options: { body:{template:"#Name#",data:countries_collection}}},
				{ view: "combo",label:webix.i18n.form.Status,name:"Status",options: { body:{template:"#Name#",data:statuses_collection}}},
				{ view: "spacer"},
				{ view: "button", name:"Update",value:webix.i18n.form.Update,
					click: () => {
						const values = this.getRoot().getValues();
						this.app.callEvent("onDataUpdate", [values]);
					}
				},
			]
		};
	}
  
	urlChange(view) {
		var id = this.getParam("id");
		user_collection.waitData.then(()=>{
			if(id && user_collection.exists(id)) {
				view.setValues(user_collection.getItem(id));
			}
		});
		
	}
}
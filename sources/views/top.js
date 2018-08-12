import {plugins} from "webix-jet";
import Settings from "views/settings";

export default class TopView extends Settings{
	config() {
		var header = {
			type:"header",template: webix.i18n.top.Menu
		};
        
		var menu = {
			view:"menu", id:"top:menu", 
			width:180, layout:"y", select:true,
			template:"<span class='webix_icon fa-#icon#'></span> #value# ",
			data:[
				{ name: "Contacts",value:webix.i18n.top.Contacts, id:"contacts", icon:"envelope-o" },
				{ name: "Data",value:webix.i18n.top.Data,id:"data",icon:"briefcase"},
				{ name: "Settings",value:webix.i18n.top.Settings,id:"settings", icon:"cog" },
			]
		};

		var ui = {
			type:"line", cols:[
				{ type:"clean", css:"app-left-panel",
					padding:10, margin:20, borderless:true, rows: [ header, menu ]},
				{ rows:[ { height:10}, 
					{ type:"clean", css:"app-right-panel", padding:4, rows:[
						{ $subview:true } 
					]}
				]}
			]
		};
         
		return ui;
	}
    
	init() {
		this.use(plugins.Menu, "top:menu");
	}
}

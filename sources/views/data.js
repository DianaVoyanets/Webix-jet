import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";
import Toolbar from "views/toolbar";

export default class Data extends JetView {
	config() {
        var side = {
            view: "list",
            select: true,
            on:{
                onAfterSelect:function(id){ 
                  $$(id).show();
              }
            },
            data: [ "Countries", "Statuses" ],
            width: 300
        }

        var countries_dataTable = {
            rows: [
                {
                editable: true,
                select: true,
                view: "datatable",
                id: "countries_dataTable",
                columns: [
                    { id:"id",header:""},
                    { id:"Name",header:"Name",editor:"text",sort:"string"},
                ]
                },
                { view: "button",value: "Add new",click: () => this.addNewItem(({Name:"Italy"}),"countries_dataTable")},
                { view: "button",value: "Delete selected",click: () => this.deleteSelectedItem("countries_dataTable")}
            ]
        }

        var statuses_dataTable = {
            rows: [
            {
                editable: true,
                select: true,
                view: "datatable",
                localId: "statuses_dataTable",
                columns: [
                    { id:"Name",header:"Name",sort:"string",editor:"text"},
                    { id:"Icon",header:"Icon",sort:"string",editor:"text"},
                ]
             },
                { view: "button",value: "Add new",click: () =>
                    this.addNewItem({Name:"Busy",Icon:"cogs"},"statuses_dataTable")
                },
                { view: "button",value: "Delete selected",click: () =>
                    this.deleteSelectedItem(statuses_dataTable)
                }
            ]
        }      

        var main = {
            cells: [ 
              { id:"Countries",cols:[countries_dataTable]},
              { id:"Statuses",cols: [statuses_dataTable]},
        ]}

        var ui = {
            rows: [
                Toolbar,
                {cols: [
                    side,
                    main
                ]}
            ]
            
        }
        return ui;
    }
    init(view) {
        this.$$("countries_dataTable").parse(countries);
        this.$$("statuses_dataTable").parse(statuses);
        // view.queryView({view:"label"}).hide();
    }

    addNewItem(obj,id) {
        this.$$(id).add(obj,0);
    }

    deleteSelectedItem(id) {
        var selected = this.$$(id).getSelectedId();
        if(selected) {
            this.$$(id).remove(selected)
        }
        else return;
    }
}
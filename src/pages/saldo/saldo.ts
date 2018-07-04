import { Component } from "@angular/core";
import { NavController, NavParams, Events } from "ionic-angular";
import { DAOLancamentos } from "../../dao/dao-lancamentos";

@Component({
    selector: "page-saldo",
    templateUrl: "saldo.html"
})
export class SaldoPage {
    saldo: any;
    dao = new DAOLancamentos();
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public events: Events
    ) {
        this.saldo = this.dao.getSaldo();

        events.subscribe("saldo:update", saldo => {
            this.saldo = saldo;
        });
    }
}

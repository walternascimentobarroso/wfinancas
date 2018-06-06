import { Component } from "@angular/core";
import { ModalController, NavController, NavParams } from "ionic-angular";
import { ModalContasPage } from "../modal-contas/modal-contas";
import { DAOContas } from "../../dao/dao-contas";

@Component({
    selector: "page-contas",
    templateUrl: "contas.html"
})
export class ContasPage {
    dao = new DAOContas();
    listContas;

    constructor(
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.listContas = this.dao.getList();
    }

    insert() {
        const modal = this.modalCtrl.create(ModalContasPage);
        modal.onDidDismiss(data => {
            this.dao.insert(data);
        });
        modal.present();
    }

    edit(conta) {
        const modal = this.modalCtrl.create(ModalContasPage, {
            parametro: conta
        });
        modal.onDidDismiss(data => {
            this.dao.edit(data);
        });
        modal.present();
    }

    delete(conta) {
        this.dao.delete(conta);
    }
}

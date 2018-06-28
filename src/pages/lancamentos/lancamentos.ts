import { Component } from "@angular/core";
import {
    ModalController,
    NavController,
    NavParams,
    ToastController
} from "ionic-angular";
import { ModalLancamentoPage } from "../modal-lancamento/modal-lancamento";
import { DAOLancamentos } from "../../dao/dao-lancamentos";

@Component({
    selector: "page-lancamentos",
    templateUrl: "lancamentos.html"
})
export class LancamentosPage {
    listContas;
    dao = new DAOLancamentos();

    constructor(
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController
    ) {
        this.listContas = this.dao.getList();
    }

    toast(msg) {
        const toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            showCloseButton: true,
            closeButtonText: "Ok"
        });
        toast.present();
    }

    insert() {
        const modal = this.modalCtrl.create(ModalLancamentoPage);
        modal.onDidDismiss(data => {
            this.dao.insert(data);
            this.toast("Lançamento Criada");
        });
        modal.present();
    }
}

import { Component } from "@angular/core";
import {
    AlertController,
    ModalController,
    NavController,
    NavParams,
    ToastController
} from "ionic-angular";
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
        public alertCtrl: AlertController,
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
        const modal = this.modalCtrl.create(ModalContasPage);
        modal.onDidDismiss(data => {
            if (data) {
                this.dao.insert(data);
                this.toast("Conta Criada");
            }
        });
        modal.present();
    }

    edit(conta) {
        const modal = this.modalCtrl.create(ModalContasPage, {
            parametro: conta
        });
        modal.onDidDismiss(data => {
            if (data) {
                this.dao.edit(data);
                this.toast("Conta Editada");
            }
        });
        modal.present();
    }

    delete(conta) {
        const prompt = this.alertCtrl.create({
            title: "Excluir Conta",
            message: "Tem certeza que deseja excluir a conta?",
            buttons: [
                { text: "Cancelar" },
                {
                    text: "Excluir",
                    handler: data => {
                        this.dao.delete(conta);
                        this.toast("Conta Excluida");
                    }
                }
            ]
        });
        prompt.present();
    }
}

import { Component } from "@angular/core";
import {
    AlertController,
    ModalController,
    NavController,
    NavParams,
    ToastController,
    Events
} from "ionic-angular";
import { ModalLancamentoPage } from "../modal-lancamento/modal-lancamento";
import { DAOLancamentos } from "../../dao/dao-lancamentos";
import { RelatorioPage } from "../relatorio/relatorio";

@Component({
    selector: "page-lancamentos",
    templateUrl: "lancamentos.html"
})
export class LancamentosPage {
    listContas;
    dao = new DAOLancamentos();

    constructor(
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        public events: Events
    ) {
        this.listContas = this.dao.getList();
    }

    onClickMonth() {
        this.navCtrl.push(RelatorioPage);
    }

    changePaymentStatus(lancamento) {
        lancamento.pago = lancamento.pago ? false : true;
    }

    updateMonth(data) {
        this.events.publish("saldo:update", 50);
        console.log(data);
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

    edit(lancamento) {
        const modal = this.modalCtrl.create(ModalLancamentoPage, {
            parametro: lancamento
        });
        modal.onDidDismiss(data => {
            this.dao.edit(data);
            this.toast("Lancamento Editado");
        });
        modal.present();
    }

    delete(lancamento) {
        const prompt = this.alertCtrl.create({
            title: "Excluir lancamento",
            message: "Tem certeza que deseja excluir a lancamento?",
            buttons: [
                { text: "Cancelar" },
                {
                    text: "Excluir",
                    handler: data => {
                        this.dao.delete(lancamento);
                        this.toast("Lancamento Excluido");
                    }
                }
            ]
        });
        prompt.present();
    }
}

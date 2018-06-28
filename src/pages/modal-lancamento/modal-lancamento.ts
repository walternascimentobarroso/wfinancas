import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { DAOContas } from "../../dao/dao-contas";

@Component({
    selector: "page-modal-lancamento",
    templateUrl: "modal-lancamento.html"
})
export class ModalLancamentoPage {
    lancamento;
    listContas;
    dao = new DAOContas();
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController
    ) {
        this.lancamento = {};
        this.listContas = this.dao.getList();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    salvar() {
        this.viewCtrl.dismiss(this.lancamento);
    }
}

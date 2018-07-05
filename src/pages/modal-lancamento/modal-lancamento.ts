import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { DAOContas } from "../../dao/dao-contas";

@Component({
    selector: "page-modal-lancamento",
    templateUrl: "modal-lancamento.html"
})
export class ModalLancamentoPage {
    lancamento:any;
    listContas;
    dao = new DAOContas();
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController
    ) {
        this.lancamento = navParams.get("parametro")
        ? navParams.get("parametro")
        : { descricao: "" };
        this.listContas = this.dao.getList();
        this.lancamento.data = new Date().toISOString();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    salvar() {
        this.viewCtrl.dismiss(this.lancamento);
    }
}

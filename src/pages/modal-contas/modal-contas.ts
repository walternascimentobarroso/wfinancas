import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";

@Component({
    selector: "page-modal-contas",
    templateUrl: "modal-contas.html"
})
export class ModalContasPage {
    conta;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController
    ) {
        this.conta = navParams.get("parametro")
            ? navParams.get("parametro")
            : { descricao: "" };
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    salvar() {
        this.viewCtrl.dismiss(this.conta);
    }
}

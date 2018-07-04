import { Component } from "@angular/core";
import { LancamentosPage } from "../lancamentos/lancamentos";
import { SaldoPage } from "../saldo/saldo";

@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage {
    lancamentos: any;
    saldo: any;

    constructor() {
        this.lancamentos = LancamentosPage;
        this.saldo = SaldoPage;
    }
}

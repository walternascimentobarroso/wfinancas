import { Component } from "@angular/core";
import { LancamentosPage } from "../lancamentos/lancamentos";

@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage {
    lancamentos: any;

    constructor() {
        this.lancamentos = LancamentosPage;
    }
}

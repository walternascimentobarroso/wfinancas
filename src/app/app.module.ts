import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ContasPage } from "../pages/contas/contas";
import { SaldoPage } from "../pages/saldo/saldo";
import { RelatorioPage } from "../pages/relatorio/relatorio";
import { ModalContasPage } from "../pages/modal-contas/modal-contas";
import { LancamentosPage } from "../pages/lancamentos/lancamentos";
import { ModalLancamentoPage } from "../pages/modal-lancamento/modal-lancamento";
import { DataFilterComponent } from "../components/data-filter/data-filter";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LOCALE_ID } from "@angular/core";
import localePtBr from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import localePtBrExtra from "@angular/common/locales/extra/pt";
registerLocaleData(localePtBr, "pt-BR", localePtBrExtra);

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SaldoPage,
        ContasPage,
        RelatorioPage,
        ModalContasPage,
        LancamentosPage,
        ModalLancamentoPage,
        DataFilterComponent
    ],
    imports: [BrowserModule, IonicModule.forRoot(MyApp)],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SaldoPage,
        ContasPage,
        RelatorioPage,
        ModalContasPage,
        LancamentosPage,
        ModalLancamentoPage,
        DataFilterComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: LOCALE_ID, useValue: "pt-BR" },
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}

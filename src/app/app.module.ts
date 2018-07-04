import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ContasPage } from "../pages/contas/contas";
import { SaldoPage } from "../pages/saldo/saldo";
import { ModalContasPage } from "../pages/modal-contas/modal-contas";
import { LancamentosPage } from "../pages/lancamentos/lancamentos";
import { ModalLancamentoPage } from "../pages/modal-lancamento/modal-lancamento";
import { ListPage } from "../pages/list/list";
import { DataFilterComponent } from "../components/data-filter/data-filter";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SaldoPage,
        ContasPage,
        ModalContasPage,
        LancamentosPage,
        ModalLancamentoPage,
        DataFilterComponent,
        ListPage
    ],
    imports: [BrowserModule, IonicModule.forRoot(MyApp)],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SaldoPage,
        ContasPage,
        ModalContasPage,
        LancamentosPage,
        ModalLancamentoPage,
        DataFilterComponent,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}

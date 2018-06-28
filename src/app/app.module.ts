import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ContasPage } from "../pages/contas/contas";
import { ModalContasPage } from "../pages/modal-contas/modal-contas";
import { LancamentosPage } from "../pages/lancamentos/lancamentos";
import { ModalLancamentoPage } from "../pages/modal-lancamento/modal-lancamento";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ContasPage,
        ModalContasPage,
        LancamentosPage,
        ModalLancamentoPage,
        ListPage
    ],
    imports: [BrowserModule, IonicModule.forRoot(MyApp)],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ContasPage,
        ModalContasPage,
        LancamentosPage,
        ModalLancamentoPage,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}

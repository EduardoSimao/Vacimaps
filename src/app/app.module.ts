import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { RedefinirSenhaPageModule } from '../pages/redefinir-senha/redefinir-senha.module';
import { EsqSenhaPageModule } from '../pages/esqSenha/esqSenha.module';
import { VerifyCodePageModule } from '../pages/verify-code/verify-code.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { Tab1PageModule } from '../pages/tab1/tab1.module';
import { Tab2PageModule } from '../pages/tab2/tab2.module';
import { PopoverPageModule } from '../pages/popover/popover.module'; 
import { ModalPageModule } from '../pages/modal/modal.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { VacinasPageModule } from '../pages/vacinas/vacinas.module';
import { ModalNovasVacinasPageModule } from '../pages/modal-novas-vacinas/modal-novas-vacinas.module';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,    
    IonicModule.forRoot(MyApp),
    CadastroPageModule,
    DashboardPageModule,
    RedefinirSenhaPageModule,
    EsqSenhaPageModule,
    VerifyCodePageModule,
    TabsPageModule,
    Tab1PageModule,
    Tab2PageModule,
    PopoverPageModule,
    ModalPageModule,
    PerfilPageModule,
    VacinasPageModule,
    ModalNovasVacinasPageModule,
    ConfiguracoesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

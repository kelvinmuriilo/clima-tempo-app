import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//Componentes
import { AppComponent } from './app.component';
import { PrevisaoBuscaComponent } from './previsao-busca/previsao-busca.component';
import { PrevisaoCapitaisComponent } from './previsao-capitais/previsao-capitais.component';

//Módulos
import { CompartilhadoModule } from './compartilhado/compartilhado.module';

//Serviços
import { ClimaTempoService } from './clima.service';

const COMPONENTES = [
    AppComponent,
    PrevisaoBuscaComponent,
    PrevisaoCapitaisComponent
];

@NgModule({
  declarations: [
    COMPONENTES
  ],
  imports: [
    BrowserModule,
    CompartilhadoModule,
    HttpClientModule
  ],
  providers: [
    ClimaTempoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

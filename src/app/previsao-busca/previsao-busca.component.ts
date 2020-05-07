import { Component, OnInit } from '@angular/core';

import { ClimaTempoService } from '../clima.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Temperatura } from '../app.modelo';

@Component({
  selector: 'app-previsao-busca',
  templateUrl: './previsao-busca.component.html',
  styleUrls: ['./previsao-busca.component.css']
})
export class PrevisaoBuscaComponent implements OnInit {
  formPesquisa : FormGroup;
  temperatura: any;
  areaTemperatura: boolean;

  constructor(
    private climaTempoServico : ClimaTempoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    //this.carregaTemperatura();
    this.iniciarFormPesquisa();
  }

  iniciarFormPesquisa(): void{
    this.formPesquisa = this.formBuilder.group({
      cidade: this.formBuilder.control('')
    });
  }

  buscarCidade(): void{
    let nomeCidade: string = this.formPesquisa.value.cidade;
    this.climaTempoServico.getTemperatura(nomeCidade).subscribe(temp =>{
      this.temperatura = temp;
      this.temperatura.forecast.shift();
      this.mostrarAreaTemperatura();
    });
  }

  mostrarAreaTemperatura() {
    this.areaTemperatura = !this.areaTemperatura;
  }

  /*private carregaTemperatura(){
    this.temperatura = this.climaTempoServico.getTemperatura();
    console.log(this.temperatura.results)
  }
  */
}

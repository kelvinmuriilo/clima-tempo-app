import { 
    Component,
    OnInit,
    Input,
    Output,
    forwardRef ,
    EventEmitter
  } from '@angular/core';
import{ 
  FormControl,
  NG_VALUE_ACCESSOR,
  
} from '@angular/forms';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSearchComponent),
    multi: true
  }]
})
export class InputSearchComponent implements OnInit {
  @Input() public formControl: FormControl;
  @Input() public placeholder: string;
  @Input() public type: string = 'text';
  @Input() public class: string;
  @Input() public classeIcone: string;

  @Output() public alterarValor: EventEmitter<string> = new EventEmitter<string>();
  @Output() public eventoClick: EventEmitter<any>= new EventEmitter<any>();

  private function: Function;
  private valor: string;
  private onChange: Function;
  private onTouched: Function;

  constructor() { }

  ngOnInit(): void {
    if (!this.formControl) {
      throw Error("Informe o form control do componente input");
    }
  }

  writeValue(valor: string): void {
    this.valor = valor;
    this.alterarValor.emit(this.valor);
  }

  registerOnChange(funcao: Function): void {
    this.onChange = funcao;
  }
  
  registerOnTouched(funcao: Function): void {
    this.onTouched = funcao;
  }

  bindClick(): void{
    this.eventoClick.emit();
  }

  bindPressEnter(event: KeyboardEvent): void{
    if(event.keyCode === 13){
      this.eventoClick.emit();
    }
  }

}

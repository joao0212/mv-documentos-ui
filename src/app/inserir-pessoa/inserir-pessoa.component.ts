import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { FormGroup } from '@angular/forms';
import { Pessoa } from '../model';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {

  pessoa = new Pessoa();
  documento: any = {};
  @Output() pessoaSalva = new EventEmitter();

  constructor(private pessoaService: PessoasService) { }

  ngOnInit() { }

  adicionar(form: FormGroup) {
    this.pessoaService.adicionar(this.pessoa).subscribe(response => {
      form.reset();
      this.pessoa = new Pessoa();
      this.pessoaSalva.emit(response);
    });
  }

  incluirDocumentos() {
    this.pessoa.documentos.push(this.documento);
    this.documento = {};
  }

}

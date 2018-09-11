import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: Array<any>;

  constructor(private pessoaService: PessoasService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.pessoaService.listar().subscribe(response => this.pessoas = response);
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.id).subscribe(response => {
      this.listar();
    });
  };

  editar(pessoa: any) {
    this.pessoaService.editar(pessoa.id, pessoa).subscribe(response => {
      this.pessoas = response
    });
  }
}

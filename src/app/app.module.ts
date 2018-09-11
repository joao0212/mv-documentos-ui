import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InserirPessoaComponent,
    ListarPessoaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    TableModule, InputTextModule, ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

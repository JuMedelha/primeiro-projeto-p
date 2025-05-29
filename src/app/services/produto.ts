import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  getProdutos(): Produto[] {
    return [
      {nome: 'Notebook', promocao: true},
      {nome: 'Mouse', promocao: true},
      {nome: 'Pc Gamer', promocao: true},
      {nome: 'Mouse sem fio', promocao: true},
      {nome: 'Teclado', promocao: true},

    ]
  };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone: true,
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.css'
})
export class NomeComponenteComponent {
  nome: string = "Julliana Medelha";
  profissao:string = "Desenvolvedor Web";
  hobbies: string[] = ["leitura", "Passear, Tecnologia", "Viajar"]

}

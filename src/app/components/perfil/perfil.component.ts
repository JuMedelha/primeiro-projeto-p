import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nome = '';
  perfil = {
    username:'DevJuh',
    nome: 'Ju Medelha',
    local:'Manaus',
    idade: 30,
    profissao: 'Desenvolvedora Web',
    empresa:'Sidia',
    publicacoes:358 ,
    seguidores: 666,
    seguindo: 50,
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQC4zX-3duwdQiyTIh8Gac9Fp7EpjH4iRwAQ&s'
  };
}

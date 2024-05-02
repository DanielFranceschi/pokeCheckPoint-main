import { Component } from '@angular/core';
import { PokeService } from "../../services/poke.service";
import { Poke } from '../../interfaces/poke';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.css'
})
export class PokeListComponent {
  pokeList: Poke[] = [  ];
  constructor(private pokeService: PokeService) {}
  
  list(): Poke[] {
    return this.pokeList= this.pokeService.listar();
    
  }
  ngOnInit(): void {
    this.list();
  }
}

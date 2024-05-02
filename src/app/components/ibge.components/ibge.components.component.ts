import { Component } from '@angular/core';
import { Estados } from '../../interfaces/estados';
import { IbgeService } from '../../services/ibge.service';

@Component({
  selector: 'app-estados-list',
  standalone: true,
  imports: [],
  templateUrl: './ibge.components.component.html',
  styleUrl: './ibge.components.component.css'
})
export class IbgeListComponent {
  estados: Estados[] = [];

  constructor(private ibgeService: IbgeService) {}
  
  list(): void {
     this.ibgeService.list().subscribe((list) => (this.estados = list));
  }
 ngOnInit(): void {
    this.list();
  }
}
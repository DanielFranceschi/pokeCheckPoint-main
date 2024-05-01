import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeListComponent } from './components/pokelist/pokelist.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PokeListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checkMicro2';

}

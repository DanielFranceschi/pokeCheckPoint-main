import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotasComponent } from './components/rotas/rotas.component';
import { PokeListComponent } from './components/pokelist/pokelist.component';
import { IbgeListComponent } from './components/ibge.components/ibge.components.component';
import { IbgeService } from './services/ibge.service';
export const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'pokemons', component:  PokeListComponent},
 { path: 'ibge', component: IbgeListComponent },
 { path: '**', component: HomeComponent }
];
import { Routes } from '@angular/router';
import { PokeListComponent } from './components/pokelist/pokelist.component';
import { IbgeListComponent } from './components/ibge.components/ibge.components.component';
export const routes: Routes = [
 { path: '', component:  PokeListComponent},
 { path: 'ibge', component: IbgeListComponent },
];
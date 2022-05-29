import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { MoviesComponent } from './pages/movies/movies.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent},
  { path: 'sandbox', component: SandboxComponent},
  { path: 'sandbox', redirectTo: '/sandbox', pathMatch:'full' },
  { path: 'movies', redirectTo: '/movies', pathMatch:'full' },
  { path: '', redirectTo: '/movies', pathMatch:'full' },
  { path: '**', component: MoviesComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

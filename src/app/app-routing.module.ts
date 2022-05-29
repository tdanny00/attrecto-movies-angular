import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { MoviesComponent } from './pages/movies/movies.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';

const routes: Routes = [
  { path: '', component: MoviesComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'sandbox', component: SandboxComponent},
  { path: '**', component: SandboxComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviesService } from './services/movies.service';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SandboxComponent,
    ToolbarComponent,
    MoviesComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

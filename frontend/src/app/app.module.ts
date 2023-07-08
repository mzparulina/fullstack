import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ArticleComponent } from './services/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarticlesComponent,
    CreatearticleComponent,
    EditarticleComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListmusicComponent } from './listmusic/listmusic.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMusicComponent } from './add-music/add-music.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMusicComponent } from './edit-music/edit-music.component';

@NgModule({
  declarations: [
    AppComponent,
    ListmusicComponent,
    AddMusicComponent,
    EditMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

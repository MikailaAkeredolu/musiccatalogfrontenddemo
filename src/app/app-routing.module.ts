import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMusicComponent } from './add-music/add-music.component';
import { EditMusicComponent } from './edit-music/edit-music.component';
import { ListmusicComponent } from './listmusic/listmusic.component';

// Routing
const routes: Routes = [
  {path: '', component: ListmusicComponent},
  {path: 'listMusic', component: ListmusicComponent},
  {path: 'addMusicAlbum', component: AddMusicComponent },
  {path: 'editMusicAlbum/:id', component: EditMusicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

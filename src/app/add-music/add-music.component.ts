import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Music } from '../music';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
 music = new Music();
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  submitMusicAlbum() {
   this.dataService.addMusicAlbum(this.music).subscribe(
     data => {
       this.router.navigate(['listMusic']);
     }
   );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Music } from '../music';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.css']
})
export class EditMusicComponent implements OnInit {
// const id = this.activatedRoute.snapshot.params[`id`];
music = new Music();
  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  editMusicButton() {
    this.dataService.addMusicAlbum(this.music).subscribe(
      data => {
        this.router.navigate(['listMusic']);
      }
    );

  }

}

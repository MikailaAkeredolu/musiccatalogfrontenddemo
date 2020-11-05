import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { Music } from '../music';

@Component({
  selector: 'app-listmusic',
  templateUrl: './listmusic.component.html',
  styleUrls: ['./listmusic.component.css']
})
export class ListmusicComponent implements OnInit {
musicAlbums: Music[];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMusicAlbums();
  }

  getAllMusicAlbums() {
    this.dataService.fetchMusicAlbums().subscribe(
      data => {
         this.musicAlbums = data;
      },
      error => console.log(error)
    );
  }

  goToAddMusicAlbum() {
    this.router.navigate(['addMusicAlbum']);
  }

  goToEditMusic(id: number) {
    this.router.navigate(['editMusicAlbum', id]);
  }





}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  loadingA: boolean;

  artist: any = {};

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
                
    this.loadingA = true; 
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id) {
    this.loadingA = true;
    this.spotify.getArtist(id)
                .subscribe(data => {
                  console.log(data);
                  this.artist = data;
                  this.loadingA = false;
                });
  }


}

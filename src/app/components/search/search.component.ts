import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  artists: any[] = [];

  ngOnInit() {
  }

  search(term: string) {
    console.log(term);
    this.spotify.getArtist(term)
                .subscribe((data: any) => {
                  console.log(data.artists.items);
                  this.artists = data.artists.items;
                });
  }

}

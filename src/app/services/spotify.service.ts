import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify works!');
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBtyabXzVUavQXeD2StyOEOxO2BvBB9k7gwTP0naFOd6k9NiqIwb5sxm8jAHxba_AHfyYzhi97LPetv1mY'
    });

    return this.http.get(`https://api.spotify.com/v1/${ query }`, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
              .pipe(map((data: any) => data.albums.items));
  }

  getArtists(term: string) {

    return this.getQuery(`search?q=${ term }&type=artist`)
              .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {

    return this.getQuery(`artists/${ id }`)
              // .pipe(map((data: any) => data.artists.items));
  }
}

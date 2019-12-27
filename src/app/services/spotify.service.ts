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
      Authorization: 'Bearer BQC3tmfNsDGdlcA45JiVB6HHFBGSws6DhenshFQvuTASz94mCnAD1-biCmgMK8h10bgJ6jnzQOagodZrMmo'
    });

    return this.http.get(`https://api.spotify.com/v1/${ query }`, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
              .pipe(map((data: any) => data.albums.items));
  }

  getArtist(term: string) {

    return this.getQuery(`search?q=${ term }&type=artist`)
              .pipe(map((data: any) => data.artists.items));
  }
}

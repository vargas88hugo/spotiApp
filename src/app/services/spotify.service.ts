import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify works!');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA876WdFAxQexbWl9fivVyaLUQVWAAWELOzpLtfIlXVES-aLRlvwGStmUhdKFEEzcERvwGjAZZz4BBeIS4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(term: string) {
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA876WdFAxQexbWl9fivVyaLUQVWAAWELOzpLtfIlXVES-aLRlvwGStmUhdKFEEzcERvwGjAZZz4BBeIS4'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ term }&type=artist`, {headers});
  }
}

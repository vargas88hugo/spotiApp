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
      'Authorization': 'Bearer BQBOeU0lefNJHkBiDeTPBXcl0V6nHww9opoPoj_6F1uUebYMthnrifciL5HuKSlX5ezI1Zl0seIarLRKUTk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}

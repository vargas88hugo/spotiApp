import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC4q9X4NDgk9bPNU9uQd-Uum3CemCoRqd7fVs1sFFeRvv8Ap0N0hzov1VSbChAMpDJQDKwV8V9VmFp0frg'
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

    return this.getQuery(`artists/${ id }`);
              // .pipe(map((data: any) => data.artists.items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe(map((data: any) => data.tracks));
  }
}

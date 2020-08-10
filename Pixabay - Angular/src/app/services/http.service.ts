import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getImages(searchTerm: string = 'nature'): Observable<any[]> {
    return this.http.get<any[]>(
      `https://pixabay.com/api/?key=17039239-7ccdc3f5c80caa80d628661b2&q=${searchTerm}&image_type=photo&pretty=true`
    );
  }
}

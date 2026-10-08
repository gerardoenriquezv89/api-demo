import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // URL base de la API pública JSONPlaceholder
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  // Inyectamos HttpClient en el constructor
  constructor(private http: HttpClient) {}

  // Método para obtener los posts
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }
}

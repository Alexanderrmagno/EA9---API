import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'htJh1zMPTQ3NOTL2PElVC4SSPft3HBpIo4iudIbX';

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable <any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`);
  }
}

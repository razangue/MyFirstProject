import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personne } from 'src/app/interfaces/personne';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
 url: string ='http://localhost:5555/personnes/';
  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Personne[]>{
    return this.httpClient.get<Personne[]>(this.url);
  }

  addPerson(p: Personne): Observable<Personne> {
    return this.httpClient.post(this.url, p);
  }

  deletePerson(id: number) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  getById(id: number): Observable<Personne>{
    return this.httpClient.get<Personne>(this.url + id);
  }

  updatePersonne(p: Personne){
    return this.httpClient.put(this.url+ p.id, p).subscribe();
  }
}

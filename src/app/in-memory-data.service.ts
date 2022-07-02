import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

public apiUrl="https://heroes-8de4a-default-rtdb.firebaseio.com/heroes.json";

  constructor(private http:HttpClient) { }
getheroes():any {
return this.http.get(this.apiUrl)
}
genId(heroes:Hero[]):any{
  return heroes.length > 0 ?Math.max(...heroes.map(heroes=>heroes.id)) +1:11;
}
}

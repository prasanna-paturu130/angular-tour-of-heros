import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl='https://heroes-8de4a-default-rtdb.firebaseio.com/heroes.json';

  constructor(private http:HttpClient, private messageService:MessageService) {}

  getHero(id: number): Observable<Hero> {
    const hero=HEROES.find(h=>h.id===id)!;
    this.messageService.add(`HeroService:fetched hero id=${id}`);
    return of(hero);
  }  
   
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService:fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  private log(message:string){
    this.messageService.add(`HeroService:${message}`);
  }



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 logs:string[]=[];
 add(message:string){
   this.logs.push(message);
 }
 constructor(){}
 clear(){
   this.logs=[];
 }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaysoundService {

  constructor() { }

  playSound(){
    let audio = new Audio();
    audio.src = "../assets/sound/fondopanamerican.mp3";
    audio.load();
    audio.play();
  
  }
  
}

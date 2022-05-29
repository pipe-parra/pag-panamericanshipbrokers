import { Component, OnInit } from '@angular/core';
import { PlaysoundService } from 'src/app/playsound.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.playSound();

  }

  playSound(){
    console.log("funciona");
    let audio = new Audio();
    audio.src = '../assets/sound/fondopanamerican.mp3';
    audio.load();
    audio.play();
  
  }
  
}

import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-script.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["navbar"]);
  }

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

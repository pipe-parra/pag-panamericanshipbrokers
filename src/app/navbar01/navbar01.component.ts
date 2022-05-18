import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-script.service';

@Component({
  selector: 'app-navbar01',
  templateUrl: './navbar01.component.html',
  styleUrls: ['./navbar01.component.css']
})
export class Navbar01Component implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["navbar", "ajax"]);
  }

  ngOnInit(): void {
  }

}

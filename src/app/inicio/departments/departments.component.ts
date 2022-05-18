import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-script.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["galeria"]);
  }

  ngOnInit(): void {
  }

}

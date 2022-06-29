import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargarScriptsService } from 'src/app/cargar-script.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(){}
  

  ngOnInit(): void {
  }

}

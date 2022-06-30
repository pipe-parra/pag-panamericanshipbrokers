import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'; //para agregar firestore paso 2
import { ModelForm } from '../models/modelForm';

@Injectable({
  providedIn: 'root'
})
export class FormfireService {
  

  constructor(
    private firebase: AngularFirestore
  ) { }

  sendForm(form:ModelForm): Promise<any>{
    return this.firebase.collection('forms').add(form); //al trabajar con la promesa debo retornar algo
  }



}

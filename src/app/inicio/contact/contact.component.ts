import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargarScriptsService } from 'src/app/cargar-script.service';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { provideFirestore,getFirestore, collection, CollectionReference } from '@angular/fire/firestore';
import { Firestore } from 'firebase/firestore';
import { FormfireService } from 'src/app/services/formfire.service';
import { ModelForm } from 'src/app/models/ModelForm';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';

  private myForm!: Firestore;

  constructor(
    private formBuilder: FormBuilder,
    private formfire: FormfireService //agregamos el servicio de Firebase
  ){}
  ngOnInit(){
    this.contactForm = this.formBuilder.group({
        name:[null, Validators.required],
        email:[null, Validators.required, Validators.email],
        phone:[null, Validators.required],
        message:[null, Validators.required]

    })
  }
  sendForm(value:any){
    console.log(value);
    const form:ModelForm ={
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      message: this.contactForm.value.message
    } 
    this.isSubmit = true;
    this.submitMessage = 'Submitted Succesfully';
    setTimeout(()=>{
      this.isSubmit = false;
    });
    this.formfire.sendForm(form).then(()=>{
      console.log(form);
      this.contactForm.reset();
    })
  }

  



}

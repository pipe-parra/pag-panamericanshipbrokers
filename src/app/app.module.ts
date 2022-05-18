import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './inicio/header/header.component';
import { AboutComponent } from './inicio/about/about.component';
import { FactComponent } from './inicio/fact/fact.component';
import { ServiceStartComponent } from './inicio/service-start/service-start.component';
import { FeatureComponent } from './inicio/feature/feature.component';
import { PrincipalComponent } from './inicio/principal/principal.component';
import { ContactComponent } from './inicio/contact/contact.component';
import { ClientTestimoniosComponent } from './inicio/client-testimonios/client-testimonios.component';
import { DepartmentsComponent } from './inicio/departments/departments.component';
import { Shipbroking1Component } from './servicios/shipbroking1/shipbroking1.component';
import { MarketintelligenceComponent } from './servicios/marketintelligence/marketintelligence.component';
import { MarineserviceComponent } from './servicios/marineservice/marineservice.component';
import { QueHacemosComponent } from './compañia/que-hacemos/que-hacemos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CargarScriptsService } from './cargar-script.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Departments2Component } from './inicio/departments2/departments2.component';
import { Departments3Component } from './inicio/departments3/departments3.component';
import { CareersComponent } from './careers/careers.component';
import { PeopleNetworkComponent } from './people-network/people-network.component';
import { BulkComponent } from './departments/bulk/bulk.component';
import { TanquerosComponent } from './departments/tanqueros/tanqueros.component';
import { LinerComponent } from './departments/liner/liner.component';
import { QuimicosTanquerosPequenosComponent } from './departments/quimicos-tanqueros-pequenos/quimicos-tanqueros-pequenos.component';
import { LpgComponent } from './departments/lpg/lpg.component';
import { LngComponent } from './departments/lng/lng.component';
import { OffshoreComponent } from './departments/offshore/offshore.component';
import { NuevasConstruccionesComponent } from './departments/nuevas-construcciones/nuevas-construcciones.component';
import { Navbar01Component } from './navbar01/navbar01.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    FactComponent,
    ServiceStartComponent,
    FeatureComponent,
    PrincipalComponent,
    ContactComponent,
    ClientTestimoniosComponent,
    DepartmentsComponent,
    Shipbroking1Component,
    MarketintelligenceComponent,
    MarineserviceComponent,
    QueHacemosComponent,
    NoticiasComponent,
    Departments2Component,
    Departments3Component,
    CareersComponent,
    PeopleNetworkComponent,
    BulkComponent,
    TanquerosComponent,
    LinerComponent,
    QuimicosTanquerosPequenosComponent,
    LpgComponent,
    LngComponent,
    OffshoreComponent,
    NuevasConstruccionesComponent,
    Navbar01Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule 
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

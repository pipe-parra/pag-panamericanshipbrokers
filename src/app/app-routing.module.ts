import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { QueHacemosComponent } from './compañia/que-hacemos/que-hacemos.component';
import { BulkComponent } from './departments/bulk/bulk.component';
import { LinerComponent } from './departments/liner/liner.component';
import { LngComponent } from './departments/lng/lng.component';
import { LpgComponent } from './departments/lpg/lpg.component';
import { NuevasConstruccionesComponent } from './departments/nuevas-construcciones/nuevas-construcciones.component';
import { OffshoreComponent } from './departments/offshore/offshore.component';
import { QuimicosTanquerosPequenosComponent } from './departments/quimicos-tanqueros-pequenos/quimicos-tanqueros-pequenos.component';
import { TanquerosComponent } from './departments/tanqueros/tanqueros.component';
import { HeaderComponent } from './inicio/header/header.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PeopleNetworkComponent } from './people-network/people-network.component';
import { MarineserviceComponent } from './servicios/marineservice/marineservice.component';
import { MarketintelligenceComponent } from './servicios/marketintelligence/marketintelligence.component';
import { Shipbroking1Component } from './servicios/shipbroking1/shipbroking1.component';

const routes: Routes = [
   {path: '', component:HeaderComponent},
   {path: 'header', component:HeaderComponent},
   {path: 'shipbroking', component:Shipbroking1Component},
   {path: 'market-intelligence', component:MarketintelligenceComponent},
   {path: 'marine-service', component:MarineserviceComponent},
   {path: 'que-hacemos', component:QueHacemosComponent},
   {path: 'noticias', component:NoticiasComponent},
   {path: 'people-network', component:PeopleNetworkComponent},
   {path: 'careers', component:CareersComponent},

   {path: 'nuevas-construcciones', component:NuevasConstruccionesComponent},
   {path: 'bulk', component:BulkComponent},
   {path: 'liner', component:LinerComponent},
   {path: 'lng', component:LngComponent},
   {path: 'lpg', component:LpgComponent},
   {path: 'offshore', component:OffshoreComponent},
   {path: 'quimicos-tanqueros-pequenos', component:QuimicosTanquerosPequenosComponent},
   {path: 'tanqueros', component:TanquerosComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

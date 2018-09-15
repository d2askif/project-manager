import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { CreatContractComponent } from './components/creat-contract/creat-contract.component';
import { CreateVariationStatusComponent } from './components/create-variation-status/create-variation-status.component';
import { BasicContractInfoComponent } from './components/basic-contract-info/basic-contract-info.component';
import { ContractLandingComponent } from './components/contract-landing/contract-landing.component';

const appRoutes: Routes =[
  {path: "", component: ProjectPageComponent},
  {path: "new", component: NewProjectComponent},
  {path: "contract",component : ContractLandingComponent,
  children:[
    {path:"new-contract", component:CreatContractComponent },
    {path: "basic-info",component:BasicContractInfoComponent}
      ]
    },
  {path: "create-contract", component: CreatContractComponent},
  {path: "create-variation-status", component: CreateVariationStatusComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewProjectComponent,
    NavigationComponent,
    ProjectPageComponent,
    CreatContractComponent,
    CreateVariationStatusComponent,
    BasicContractInfoComponent,
    ContractLandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// Rutas
import { Pages_Routes } from './pages.routes';


// modulos
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        PagesComponent,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        Pages_Routes,
        FormsModule
    ]
})

export class PagesModule { }
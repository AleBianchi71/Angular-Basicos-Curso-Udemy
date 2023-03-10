import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";

import { HeroesModule } from './herores/herores.module';
import { ContadorModule } from "./contador/contador.module";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        HeroesModule,
        CommonModule, ContadorModule]
})
export class AppModule {}

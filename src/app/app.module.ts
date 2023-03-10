import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { HeroesModule } from "./herores/herores.module";
import { ContadorModule } from "./contador/contador.module";
import { CommonModule } from "@angular/common";
import { DbzModule } from "./dbz/dbz.module";
import { DbzService } from './dbz/services/dbz.service';

@NgModule({
  declarations: [AppComponent],
  providers: [DbzService],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeroesModule, CommonModule, ContadorModule, DbzModule],
})
export class AppModule {}

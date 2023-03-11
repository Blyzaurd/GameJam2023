import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Map00Component } from './map00/map00.component';
import { Map01Component } from './map01/map01.component';
import { Map10Component } from './map10/map10.component';
import { Map11Component } from './map11/map11.component';
import { CombatComponent } from './combat/combat.component';
import { Map20Component } from './map20/map20.component';
import { Map21Component } from './map21/map21.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Map00Component,
    Map01Component,
    Map10Component,
    Map11Component,
    CombatComponent,
    Map20Component,
    Map21Component,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

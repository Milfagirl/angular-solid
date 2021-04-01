import { MenuListComponent } from './menu-list/menu-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    PageListComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

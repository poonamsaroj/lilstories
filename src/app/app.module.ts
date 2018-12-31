import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { StorylistComponent } from './storylist/storylist.component';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StorylistComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

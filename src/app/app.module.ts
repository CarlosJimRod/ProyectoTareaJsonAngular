import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';
import {AddTutorialComponent} from './componentes/tutorial/add-tutorial/add-tutorial.component';
import {TutorialListComponent} from './componentes/tutorial/tutorial-list/tutorial-list.component';
import {TutorialDetailsComponent} from './componentes/tutorial/tutorial-details/tutorial-details.component';
import {TutorialListDetailComponent} from './componentes/tutorial/tutorial-list-detail/tutorial-list-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddTutorialComponent,
    TutorialListComponent,
    TutorialDetailsComponent,
    TutorialListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

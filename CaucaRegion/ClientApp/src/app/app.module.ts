import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { FoodComponent } from './food/food.component';
import { MusicComponent } from './music/music.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { EventEditComponent } from './event-edit/EventEdit.component';
import { EventCreateComponent } from './event-create/eventCreate.component';
import { FoodEditComponent } from './food-edit/foodEdit.component';
import { FoodCreateComponent } from './food-create/foodCreate.component';
import { MusicEditComponent } from './music-edit/musicEdit.component';
import { MusicCreateComponent } from './music-create/musicCreate.component';

import { EventService } from './service/event.service';
import { MusicService } from './service/music.service';
import { FoodService } from './service/food.services';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EventComponent,
    FoodComponent,
    MusicComponent,
    FooterComponent,
    LoginComponent,
    EventEditComponent,
    EventCreateComponent,
    FoodEditComponent,
    FoodCreateComponent,
    MusicEditComponent,
    MusicCreateComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'event', component: EventComponent },
      { path: 'food', component: FoodComponent },
      { path: 'music', component: MusicComponent },
      { path: 'app-login', component: LoginComponent },
      { path: 'eventEdit/:id', component: EventEditComponent },
      { path: 'eventCreate', component: EventCreateComponent },
      { path: 'foodEdit/:id', component: FoodEditComponent },
      { path: 'foodCreate', component: FoodCreateComponent },
      { path: 'musicEdit/:id', component: MusicEditComponent },
      { path: 'musicCreate', component: MusicCreateComponent},
    ])
  ],
  providers: [EventService, MusicService, FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }

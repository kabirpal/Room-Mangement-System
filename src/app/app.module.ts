import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomDetailsComponent,
    TagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

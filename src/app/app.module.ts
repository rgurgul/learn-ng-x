import { SearchPipe } from './shared/pipes/search.pipe';
import { ErrorsComponent } from './shared/components/errors/errors.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './features/items/items.component';
import { WorkersComponent } from './features/workers/workers.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RegisterComponent } from './features/register/register.component';
import { SearchComponent } from './shared/components/search/search.component';
import { GridComponent } from './shared/components/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsDetailsComponent } from './features/items/items-details/items-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    SearchPipe,
    ItemsComponent,
    WorkersComponent,
    ProfileComponent,
    RegisterComponent,
    SearchComponent,
    GridComponent,
    ItemsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

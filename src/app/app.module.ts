import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListAlbumsComponent } from './listalbum/listalbum.component';
import { ArchivesComponent } from './archives/archives.component';
import { AddalbumComponent } from './addalbum/addalbum.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  {path:"listalbum",component:ListAlbumsComponent},
  {path:"archives",component:ArchivesComponent},
  {path:'addalbum',component:AddalbumComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArchivesComponent,
    AddalbumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

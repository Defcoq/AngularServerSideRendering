import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PanelComponent } from './panel/panel.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { OrganizationsComponent } from './organizations/organizations.component';

@NgModule({
  declarations: [
    AppComponent,PersonalInfoComponent, PanelComponent, RepositoriesComponent, OrganizationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

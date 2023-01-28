import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaperButtonComponent } from './component/paper-button/paper-button.component';
import { CharacterCreatorComponent } from './pages/character-creator/character-creator.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CharacterDockerComponent } from './component/character-docker/character-docker.component';
import { StageSelectorComponent } from './pages/stage-selector/stage-selector.component';
import { StageOneComponent } from './pages/stages/stage-one/stage-one.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StageTwoComponent } from './pages/stages/stage-two/stage-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PaperButtonComponent,
    CharacterCreatorComponent,
    HomeComponent,
    CharacterDockerComponent,
    StageSelectorComponent,
    StageOneComponent,
    StageTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

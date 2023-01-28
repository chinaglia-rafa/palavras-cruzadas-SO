import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterGuard } from './guards/character.guard';
import { CharacterCreatorComponent } from './pages/character-creator/character-creator.component';
import { HomeComponent } from './pages/home/home.component';
import { StageSelectorComponent } from './pages/stage-selector/stage-selector.component';
import { StageOneComponent } from './pages/stages/stage-one/stage-one.component';
import { StageTwoComponent } from './pages/stages/stage-two/stage-two.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'character-creator', component: CharacterCreatorComponent },
  {
    path: 'stage-selector',
    component: StageSelectorComponent,
    canActivate: [CharacterGuard],
  },
  {
    path: 'stage-one',
    component: StageOneComponent,
    canActivate: [CharacterGuard],
  },
  {
    path: 'stage-two',
    component: StageTwoComponent,
    canActivate: [CharacterGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

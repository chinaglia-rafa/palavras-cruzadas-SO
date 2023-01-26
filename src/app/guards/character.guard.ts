import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../services/player/player.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterGuard implements CanActivate {
  constructor(private playerService: PlayerService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return (
      this.playerService.character.name &&
      this.playerService.character.name != ''
    );
  }
}

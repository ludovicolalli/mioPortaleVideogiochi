import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements CanActivate{
  canActivate(){
    console.log('MenuService#canActivate called');
    return true;
  }
  constructor() { }
}

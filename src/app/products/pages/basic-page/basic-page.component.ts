import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  public lowecase:string='david';
  public uppercase:string='DAVID';
  public tittlecase:string='dAvId';
}

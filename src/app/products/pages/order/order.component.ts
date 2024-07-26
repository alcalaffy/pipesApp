import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  isUpperCase:boolean=false;
  herores:Hero[]=[
    {
      name:'Super-Man',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Bat-Man',
      canFly:false,
      color:Color.black
    },
    {
      name:'Spider-Man',
      canFly:false,
      color:Color.red
    },
    {
      name:'Iron-Man',
      canFly:true,
      color:Color.red
    }
  ]
  onUpperCase():void{
    this.isUpperCase=!this.isUpperCase;
  }
}

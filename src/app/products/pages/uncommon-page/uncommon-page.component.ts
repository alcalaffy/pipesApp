import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  name:string='David';
  gender:'male'|'female'='male';
  guest:string[]=['David','Hermione','Aurora','Monica','Esteffany'];

  invitationMap={
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient():void{
    if(this.name=='David'){
      this.name='Nahomi';
      this.gender='female';
    }else{
      this.name='David';
      this.gender='male';
    }
  }

  deleteguest():void{
    this.guest.shift();
  }

  clientsListMap={
    '=0':'no hay invitados.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  person={
    name:'David',
    age:26,
    address:'81 Oriente, Jalisco'
  }

  myObserbableTimer=interval(2000)
  .pipe(
    tap(value=>console.log('tap: ',value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })
}

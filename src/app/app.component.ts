import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  f1!:number;
  f2!:number;
 f3!:number;
  title = 'calculator';
  onSubmit(f:any){
   this.f1= Number(f.f1);
   this.f2= Number(f.f2);
  this.f3=this.f1+this.f2;
  }
  ngOnInit(): void {
  }
}

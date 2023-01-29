import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-rigth',
  templateUrl: './card-rigth.component.html',
  styleUrls: ['./card-rigth.component.css']
})
export class CardRigthComponent implements OnInit {
  @Input()
  imageCardRigth: string = ""
  
  @Input()
  titleCardRigth: string = ""

  @Input()
  id: string = ""

  constructor() { }

  ngOnInit(): void {
    
  }
}

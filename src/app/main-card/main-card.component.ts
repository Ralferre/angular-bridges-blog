import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  @Input()
  titleCardsGeneral: string = ""

  @Input()
  imageCard: string = ""
  
  @Input()
  titleCard: string = ""
  
  @Input()
  descriptionCard: string = ""

  @Input()
  id: string = "0"

  constructor() { }

  ngOnInit(): void {

  }
}

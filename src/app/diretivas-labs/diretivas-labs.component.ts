import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-labs',
  templateUrl: './diretivas-labs.component.html',
  styleUrls: ['./diretivas-labs.component.css']
})
export class DiretivasLabsComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  oddNumbers = [1, 2, 3, 4, 5];
  evenNumbers = [6, 7, 8, 9];
  onlyOdd = false;
  value = 5;

  constructor() { }

  ngOnInit(): void {
  }

}

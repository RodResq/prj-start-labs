import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private rendere: Renderer2) { 

  }

  ngOnInit(): void {
    this.rendere.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}

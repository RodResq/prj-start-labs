import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private rendere: Renderer2) { 

  }

  ngOnInit(): void {
    // this.rendere.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.rendere.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.rendere.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}

import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccCardhover]'
})
export class CardhoverDirective implements OnInit {

  constructor(private el: ElementRef, private render: Renderer2) { }
  
  ngOnInit(): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  }
}

import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccCardhover]'
})
export class CardhoverDirective implements OnInit {
  @Input() ccCardhover: string = 'green';
  @Input() corRetirarMouse: string = this.ccCardhover;
  
  constructor(private el: ElementRef, private render: Renderer2) { }
  
  ngOnInit(): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.ccCardhover);
  }

  @HostListener('mouseover') onHover() {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.ccCardhover)
  }

  @HostListener('mouseleave') onLeave() {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.corRetirarMouse)
  }
}

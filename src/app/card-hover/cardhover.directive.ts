import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccCardhover]'
})
export class CardhoverDirective implements OnInit {
  @Input() ccCardhover: string = 'green';
  @Input() corRetirarMouse: string = this.ccCardhover;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(private el: ElementRef, private render: Renderer2) { }
  
  ngOnInit(): void {
    this.backgroundColor = this.ccCardhover;
  }

  @HostListener('mouseover') onHover() {
    // this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.ccCardhover)
    this.backgroundColor = this.ccCardhover;
  }

  @HostListener('mouseleave') onLeave() {
    // this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.corRetirarMouse)
    this.backgroundColor = this.corRetirarMouse;
  }
}

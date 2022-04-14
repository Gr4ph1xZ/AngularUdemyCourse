import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) buttonClicked(event: Event) {
    if(this.isOpen){
      this.isOpen = false;
    }else if(this.elementRef.nativeElement.contains(event.target)){
      this.isOpen = true;
    }

  }

  constructor(private elementRef: ElementRef) { }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpvoteDownvote]'
})
export class UpvoteDownvoteDirective {

  constructor(elem:ElementRef) { 
    elem.nativeElement.style.textShadow ;
  }

}

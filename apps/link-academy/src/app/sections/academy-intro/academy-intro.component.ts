import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'link-academy-intro',
  templateUrl: './academy-intro.component.html',
  styleUrls: ['./academy-intro.component.scss'],
})
export class AcademyIntroComponent implements AfterViewInit {
  
  private tl = gsap.timeline();

  constructor() {
    //
  }

  ngAfterViewInit(): void {
  
    // this.tl.from( "#section_title", { duration: .6, height: 1, autoAlpha: 0, ease: "bounce.in)", delay: 2} )
    // this.tl.from( "#section_container", { duration: .6, autoAlpha: 0, height: 1, ease: "bounce.in)", stagger: 0.2 } )
    // this.tl.from( "#section_content *", { duration: .6, autoAlpha: 0, ease: "bounce.in)", stagger: 0.6 } )
  }
}

import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap/all';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin( DrawSVGPlugin );

@Component({
  selector: 'link-default-intro',
  templateUrl: './default-intro.component.html',
  styleUrls: ['./default-intro.component.scss'],
})

export class DefaultIntroComponent implements AfterViewInit {
  constructor() {
    // 
  }

  ngAfterViewInit(): void {
    gsap.set( "h1", { autoAlpha:1 } );
    const titleTxt = new SplitText( "h1", { type:"chars" } );

		const tl = gsap.timeline();
    tl.fromTo( "polyline, polygon, path", { drawSVG:"0" }, { duration: 1, drawSVG:"100%", stagger: 0.4 }),
    tl.to( 'svg', { duration: .7, y: -40})
    tl.from( titleTxt.chars, { duration:.5, opacity:0, stagger:0.2, ease:"power2.in"})
    tl.to( 'svg', { duration: .8, scale: 0, autoAlpha:0, ease:"power2.inOut", delay:1.8})
    tl.to( titleTxt.chars, { duration:.2, opacity:0, stagger:0.2, ease:"power2.in", onComplete:this.goHQ}, '-=1.3')
  }

  private goHQ() {
    window.location.href = 'http://localhost:4201';
  }

}

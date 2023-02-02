import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap/all';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

@Component({
  selector: 'link-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements AfterViewInit {
  
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
    window.location.href = '/courses';
  }

}

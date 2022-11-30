import { Component, AfterViewInit } from '@angular/core';

import { gsap } from 'gsap/all';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin( DrawSVGPlugin );

@Component({
  selector: 'link-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent implements AfterViewInit {
  
  public now: string | undefined;
  public curdate: string | undefined;
  
  constructor() {
    
    gsap.registerPlugin( ScrambleTextPlugin );
    
    // CLOCK / TIME HELPER
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
      this.curdate = new Date().getDate().toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
    }, 1);
    
    
  }
  
  ngAfterViewInit(): void {
    
    gsap.set( "#brand img, #brand a, #company_title", { autoAlpha:0 } );
    gsap.set( "#brand img", { scale:0 } );

    //  TEXT SCRAMBLE IN ANIMATION
    const titleIn = gsap.timeline();
    titleIn.to( "#brand img", { duration: 1,  autoAlpha:1, scale: 1, ease:"power2.out"})
    titleIn.to( "#brand img", { duration: .3,  x:+80, ease:"power2.out"})
    titleIn.to( "#brand a", { "display":"block",  duration: 1,  autoAlpha:1 })
    
    titleIn.to( "#company_title", {
      duration: 1,
      autoAlpha:1,
      scrambleText:
      {
        text:"McTavish & Co Chartered Accountants",
        speed: .1,
        chars:"10"
      }
    }, "-=1.2"),
    titleIn.from('#date_time', {
      alpha:0
    }),
    
    // User Notification Rotator
    titleIn.from('#notifications', {
      alpha:0
    })
    
    
    titleIn.to( "body", { duration: 1, ease:"power2.inOut", "background-color":"rgba(57,55,55,0)", onComplete:this.rotateNotifications }, "-=1")
    
    // this.rotateNotifications();
  }
  
  private rotateNotifications ():void {


    const n_tl = gsap.timeline({ repeat:-1 });

    n_tl.to( "#notifications", { duration: 1, autoAlpha:1,
      scrambleText:
      {
        text:"3 OVER CAPACITY",
        speed: .1,
        chars:"10"
      }
    })
    n_tl.to( "#notifications", {
      duration: 1,
      autoAlpha:0,
      delay:4,
      scrambleText:
      {
        text:"",
        speed: .1,
        chars:"10"
      }
    })
    n_tl.to( "#notifications", {
      delay:.5,
      duration: 1,
      autoAlpha:1,
      scrambleText:
      {
        text:"20 Unassigned Tasks",
        speed: .1,
        chars:"10"
      }
    })
    n_tl.to( "#notifications", {
      duration: 1,
      autoAlpha:0,
      delay:4,
      scrambleText:
      {
        text:"",
        speed: .1,
        chars:"10"
      }
    })

  }

}

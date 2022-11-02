import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

@Component({
  selector: 'link-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
  
})
export class DefaultHeaderComponent implements OnInit {
  
  public now: string | undefined;
  
  constructor() {
    
    gsap.registerPlugin( ScrambleTextPlugin );

    // CLOCK / TIME HELPER
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);

    
  }
  
  ngOnInit(): void {
    
    //  TEXT SCRAMBLE IN ANIMATION
    const titleIn = gsap.timeline();

    titleIn.to( "#company_title", {
      duration: 1,
      scrambleText:
      {
        text:"McTavish & Co Chartered Accountants",
        speed: .1,
        chars:"10"
      }
    }),
    titleIn.from('#date_time', {
      alpha:0

    }),
    titleIn.from('#feedback', {
      alpha:0
      
    })
  }
}

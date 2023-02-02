import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';


export interface PeriodicElement {
  client: string;
  j_no: string;
  j_name: string;
  t_name: string;
  t_due: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {client: "Vehement Capital Partners", j_no: '13201', j_name: "2020 Annual Engagement", t_name: "Developed Design", t_due: '7-Oct-16'},
  {client: "Umbrella Corporation", j_no: '13204', j_name: "Architecture", t_name: 'Annual Accounts', t_due: '31-May-17'},
  {client: "Initech", j_no: '13206', j_name: "Distribution for South Island", t_name: 'Bookkeeping 101', t_due: '8-Jun-17'},
  {client: "Hooli", j_no: '13209', j_name: "Install Lighting in Kitchen", t_name: 'Preliminary Design', t_due: '7-Oct-16'},
  {client: "Pied Piper", j_no: '13301', j_name: "45 Longcroft Street", t_name: 'Labour - Lay Mulch', t_due: '31-Mar-18'},
  {client: "The Acme Corporation", j_no: '13431', j_name: "Generator Replacement", t_name: 'Labour', t_due: '7-Oct-16'},
  {client: "Soylent Green", j_no: '13563', j_name: "Internal Time", t_name: 'Travel', t_due: '31-Jul-17'},
  {client: "Massive Dynamic", j_no: '15341', j_name: "Brand Design", t_name: 'Assembly', t_due: '19-Jan-17'},
  {client: "Globex Corporation", j_no: '12509', j_name: "Support", t_name: 'Preliminary Design', t_due: '9-May-17'},
];

@Component({
  selector: 'link-task-schedule',
  templateUrl: './task-schedule.component.html',
  styleUrls: ['./task-schedule.component.scss'],
})
export class TaskScheduleComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['client', 'j_no', 'j_name', 't_name', 't_due'];
  dataSource = ELEMENT_DATA;

  private tl = gsap.timeline();

  constructor() {
    // 
  }

  ngAfterViewInit() {

    console.log("TEST: Task Schedule");

    // gsap.set(".mr", { autoAlpha: 0 });

    // this.tl.pause()
    this.tl.from( "#section_title", { duration: .6, height: 1, autoAlpha: 0, ease: "bounce.in)", delay: 2} )
    this.tl.from( "#section_container table", { duration: .6, autoAlpha: 0, width: 1, ease: "bounce.in)", stagger: 0.2 } )
    this.tl.from( ".th", { duration: .3, autoAlpha: 0, ease: "bounce.in)", stagger: 0.2 } )
    this.tl.from( ".tr", { duration: .2, autoAlpha: 0, ease: "bounce.in)", stagger: 0.2 } )

  }
}

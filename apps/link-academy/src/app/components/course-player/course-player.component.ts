import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'link-course-player',
  templateUrl: './course-player.component.html',
  styleUrls: ['./course-player.component.scss'],
})
export class CoursePlayerComponent implements OnInit {

  
  videoItems = [
    {
      name: '1. Overview of program',
      src: 'https://link-academy.s3.amazonaws.com/1_Overview_of_program.mp4',
      type: 'video/mp4'
    },
    {
      name: '2. What is Xero Practice Manager',
      src: 'https://link-academy.s3.amazonaws.com/2_What_is_Xero_Practice_Manager.mp4',
      type: 'video/mp4'
    },
    {
      name: '3. Limitations of Xero Practice Manager',
      src: 'https://link-academy.s3.amazonaws.com/3_Limitations_of_Xero_Practice_Manager.mp4',
      type: 'video/mp4'
    },
    {
      name: '4. Is Xero Practice Manager right for my practice?',
      src: 'https://link-academy.s3.amazonaws.com/4_Is_Xero_Practice_Manager_right_for_my_practice.mp4',
      type: 'video/mp4'
    },
    {
      name: '5. Need further help?',
      src: 'https://link-academy.s3.amazonaws.com/5_Need_further_help.mp4',
      type: 'video/mp4'
    },
    {
      name: '6. Navigation Overview',
      src: 'https://link-academy.s3.amazonaws.com/6_Navigation_Overview.mp4',
      type: 'video/mp4'
    },
    {
      name: '7. Clients Jobs and Tasks',
      src: 'https://link-academy.s3.amazonaws.com/7_Clients_Jobs_and_Tasks.mp4',
      type: 'video/mp4'
    },
    {
      name: '8. Billable vs Non Billable Time',
      src: 'https://link-academy.s3.amazonaws.com/8_Billable_vs_Non_Billable_Time.mp4',
      type: 'video/mp4'
    },
    {
      name: '9. WIP Ledger',
      src: 'https://link-academy.s3.amazonaws.com/9_WIP_Ledger.mp4',
      type: 'video/mp4'
    },
    {
      name: '10. Setting up Jobs',
      src: 'https://link-academy.s3.amazonaws.com/10_Setting_up_Jobs.mp4',
      type: 'video/mp4'
    },
    {
      name: '11. Entering Time and Costs',
      src: 'https://link-academy.s3.amazonaws.com/11_Entering_Time_and_Costs.mp4',
      type: 'video/mp4'
    },
    {
      name: '12. How to Invoice in XPM',
      src: 'https://link-academy.s3.amazonaws.com/12_How_to_Invoice_in_XPM.mp4',
      type: 'video/mp4'
    },
    {
      name: '13. Recurring Invoices in Xero',
      src: 'https://link-academy.s3.amazonaws.com/13_Recurring_Invoices_in_Xero.mp4',
      type: 'video/mp4'
    },
    {
      name: '14. Biggest Mistakes when Invoicing',
      src: 'https://link-academy.s3.amazonaws.com/14_Biggest_Mistakes_when_Invoicing.mp4',
      type: 'video/mp4'
    },
    {
      name: '15. How to Schuedle your Workflow',
      src: 'https://link-academy.s3.amazonaws.com/15_How_to_Schuedle_your_Workflow.mp4',
      type: 'video/mp4'
    },
    {
      name: '16. 5 Steps for Successful Jobs',
      src: 'https://link-academy.s3.amazonaws.com/16_5_Steps_for_Successful_Jobs.mp4',
      type: 'video/mp4'
    },
    {
      name: '17. Implementation Process Overview',
      src: 'https://link-academy.s3.amazonaws.com/17_Implementation_Process_Overview.mp4',
      type: 'video/mp4'
    },
    {
      name: '18. Start a trial of XPM',
      src: 'https://link-academy.s3.amazonaws.com/18_Start_a_trial_of_XPM.mp4',
      type: 'video/mp4'
    },
    {
      name: '19. Organisation Settings',
      src: 'https://link-academy.s3.amazonaws.com/19_Organisation_Settings.mp4',
      type: 'video/mp4'
    },
    {
      name: '20. Tasks',
      src: 'https://link-academy.s3.amazonaws.com/20_Tasks.mp4',
      type: 'video/mp4'
    },
    {
      name: '21. Staff',
      src: 'https://link-academy.s3.amazonaws.com/21_Staff.mp4',
      type: 'video/mp4'
    },
    {
      name: '22. Job Categories',
      src: 'https://link-academy.s3.amazonaws.com/22_Job_Categories.mp4',
      type: 'video/mp4'
    },
    {
      name: '23. Job Templates',
      src: 'https://link-academy.s3.amazonaws.com/23_Job_Templates.mp4',
      type: 'video/mp4'
    },
    {
      name: '24. Job States',
      src: 'https://link-academy.s3.amazonaws.com/24_Job_States.mp4',
      type: 'video/mp4'
    },
    {
      name: '25. Custom Fields',
      src: 'https://link-academy.s3.amazonaws.com/25_Custom_Fields.mp4',
      type: 'video/mp4'
    },
    {
      name: '26. Xero Integraiton',
      src: 'https://link-academy.s3.amazonaws.com/26_Xero_Integraiton.mp4',
      type: 'video/mp4'
    },
    {
      name: '27. Importing Clients',
      src: 'https://link-academy.s3.amazonaws.com/27_Importing_Clients.mp4',
      type: 'video/mp4'
    },
    {
      name: '28. Internal Jobs',
      src: 'https://link-academy.s3.amazonaws.com/28_Internal_Jobs.mp4',
      type: 'video/mp4'
    },
    {
      name: '29. Setting up Bulk Jobs',
      src: 'https://link-academy.s3.amazonaws.com/29_Setting_up_Bulk_Jobs.mp4',
      type: 'video/mp4'
    },
    {
      name: '30. Training your Team',
      src: 'https://link-academy.s3.amazonaws.com/30_Training_your_Team.mp4',
      type: 'video/mp4'
    },
    {
      name: '31. Importing WIP',
      src: 'https://link-academy.s3.amazonaws.com/31_Importing_WIP.mp4',
      type: 'video/mp4'
    },
    {
      name: '32. Reporting',
      src: 'https://link-academy.s3.amazonaws.com/32_Reporting.mp4',
      type: 'video/mp4'
    },
    {
      name: '33. Link Reporting Overview',
      src: 'https://link-academy.s3.amazonaws.com/33_Link_Reporting_Overview.mp4',
      type: 'video/mp4'
    }
  ];

  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data: any;
  
  constructor() { 
    //
  }
  ngOnInit(): void { 
    console.log( "Player Ready" );
  }
  
  videoPlayerInit( data: any ) {
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;
    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }
    this.currentVideo = this.videoItems[this.activeIndex];
  }
  
  initVdo() {
    this.data.play();
  }
  
  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
    
  }

  onResize(event: any) {
    console.log(event);
  }
}

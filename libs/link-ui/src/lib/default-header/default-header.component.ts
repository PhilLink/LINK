import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'link-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent implements OnInit {
  
  public now: string | undefined;
  
  constructor() {
    
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
  }

  ngOnInit(): void {}
}

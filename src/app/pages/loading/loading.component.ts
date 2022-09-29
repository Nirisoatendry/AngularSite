import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(private route:Router) { 
    setInterval(()=>{
      this.route.navigateByUrl("dashboard");
    },3000)
  }

  ngOnInit(): void {
  }

}

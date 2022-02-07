import { Component, OnInit } from '@angular/core';
import { jobsService } from './services/jobs.service';
import { Jobs } from './models/jobs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  job = {} as Jobs;
  jobs: Jobs[] | undefined;

  constructor(private jobsService: jobsService) {}

  ngOnInit() {
    this.getJobs();
  }
  getJobs() {
    this.jobsService.getJobs().subscribe((jobs: Jobs[]) => {
      this.jobs = jobs;
    });
  }
  alert(job:string){
    alert(job)
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../../services/api/project.service'
import { ISalesProject } from './iSalesProject.metadata';

@Component({
  selector: 'app-sales-project',
  templateUrl: './sales-project.component.html',
  styleUrls: ['./sales-project.component.css']
})
export class SalesProjectComponent implements OnInit {
  public dataprojects: ISalesProject[]; // PROJECTS DATA

  constructor(
    private projectService: ProjectService
  ) {
    this.projectService.getAllProjects().subscribe(r => {
      if (!r.error) {
        this.dataprojects = r.data;
      } 
    });
  }

  ngOnInit() {

  }
}

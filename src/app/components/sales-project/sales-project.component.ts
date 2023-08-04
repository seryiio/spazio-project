import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../../services/api/project.service'
import { ISalesProject } from './iSalesProject.metadata';
@Component({
  selector: 'app-sales-project',
  templateUrl: './sales-project.component.html',
  styleUrls: ['./sales-project.component.css'],
})
export class SalesProjectComponent implements OnInit {
  

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
  ) {
  }

  ngOnInit() {

  }
}

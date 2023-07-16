import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const sidebar = document.querySelector('.sidebar') as HTMLElement;
      const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
      const closeIcon = document.querySelector('.close-icon') as HTMLElement;
      const content = document.querySelector('.content') as HTMLElement;

      menuIcon.addEventListener('click', () => {
        sidebar.classList.add('mostrar');
      });

      closeIcon.addEventListener('click', () => {
        sidebar.classList.remove('mostrar');
      });

      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (!sidebar.contains(target) && !menuIcon.contains(target)) {
          sidebar.classList.remove('mostrar');
        }
      });
    });
  }

}
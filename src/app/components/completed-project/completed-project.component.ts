import { Component, OnInit } from '@angular/core';
import { ICompletedProject } from './iCompletedProject.metadata';

@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {
  public projects: ICompletedProject[] = [
    {
      id: 1,
      nombre: "Proyecto Institución Educativa N.º 15324",
      tipo: "construccion",
      estado: "En Ejecución",
      direccion: "IE N° 15324”, Centro Poblado Catacaos, Catacaos, Piura, Piura",
      departamento: "Piura",
      provincia: "Piura",
      distrito: "Catacaos",
      pais: "Perú",
      area: 20000,
      images: "../assets/img/Execution_Project/ie-15324_piura.png"
    }
  ]

  public filteredProjects: ICompletedProject[] = [];

  constructor(
  ) {
  }

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  selectValue: string = "";

  onDepartmentSelected(event: any) {
    // Obtiene el valor seleccionado (departamento) del evento
    const selectedDepartment = event.value;

    // Filtra los proyectos según el departamento seleccionado
    this.filteredProjects = this.projects.filter(
      (project) => project.departamento === selectedDepartment
    );
  }
}

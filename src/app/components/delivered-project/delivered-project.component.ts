import { Component, OnInit } from '@angular/core';
import { IDeliveredProject } from './iDeliveredProject.metadata';

@Component({
  selector: 'app-delivered-project',
  templateUrl: './delivered-project.component.html',
  styleUrls: ['./delivered-project.component.css']
})
export class DeliveredProjectComponent implements OnInit {
  public projects: IDeliveredProject[] = [
    {
      id: 1,
      nombre: "Proyecto Unifamiliar - Vivienda",
      tipo: "inmobiliario",
      estado: "entregado",
      direccion: "Lote 15, Manzana E, Barrio de Amay",
      departamento: "Lima",
      provincia: "Huaura",
      distrito: "Huacho",
      pais: "Perú",
      areaMenor: 50,
      areaMayor: 90,
      images: "../assets/img/Execution_Project/ie-15324_piura.png"
    }
  ]
  public filteredProjects: IDeliveredProject[] = [];

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

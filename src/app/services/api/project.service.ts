import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiClass } from 'src/app/schema/ApiClass.class';
import { ISalesProject } from 'src/app/components/sales-project/iSalesProject.metadata';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ApiClass {
  
  getAllProjects(): Observable<{ error: boolean, msg: string, data: ISalesProject[] }> {
    return this.http.get<ISalesProject[]>(this.url + 'proyectos')
      .pipe(
        map((data: ISalesProject[]) => {
          return {
            error: false,
            msg: 'Success',
            data: data
          };
        }),
        catchError((error: any) => {
          return throwError({
            error: true,
            msg: 'Error retrieving projects',
            data: []
          });
        })
      );
  }
}

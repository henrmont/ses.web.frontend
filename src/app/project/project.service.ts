import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  createProject(data: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.apiUrl}/project/create`, data)
  }

  getProjects(): Observable<Project> {
    return this.http.get<Project>(`${environment.apiUrl}/project/get/all`)
  }

  getProject(id: any): Observable<Project> {
    return this.http.get<Project>(`${environment.apiUrl}/project/get/${id}`)
  }

  updateProject(data: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.apiUrl}/project/update`, data)
  }

  updateProjectLinks(data: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.apiUrl}/project/links/update`, data)
  }

  updateProjectLogo(data: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.apiUrl}/project/logo/update`, data)
  }

  // Colaboradores
  getCollaborators(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/collaborator/get/${id}`)
  }

  getAvailableCollaborators(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/collaborator/get/available/${id}`)
  }

  deleteCollaborator(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/collaborator/delete/${id}`)
  }

  addCollaborator(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/collaborator/add`, data)
  }

  // Notificações
  getNotifications(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/notification/get/${id}`)
  }
}

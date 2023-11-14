import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTasks(): Observable<Task> {
    return this.http.get<Task>(`${environment.apiUrl}/task/get/all`)
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${environment.apiUrl}/task/get/task/${id}`)
  }

  getBoardTasks(board: number): Observable<Task> {
    return this.http.get<Task>(`${environment.apiUrl}/task/get/${board}`)
  }

  changeBoard(data: Task, board: number): Observable<Task> {
    return this.http.post<Task>(`${environment.apiUrl}/task/change/board/${board}`, data)
  }

  createTask(data: Task, board: number): Observable<Task> {
    return this.http.post<Task>(`${environment.apiUrl}/task/new/${board}`, data)
  }

  editTask(data: Task): Observable<Task> {
    return this.http.patch<Task>(`${environment.apiUrl}/task/edit`, data)
  }

  deleteTask(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/task/delete/${id}`)
  }
}

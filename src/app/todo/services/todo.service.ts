import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Todo} from '../../models';
import { observable, Observable, of } from 'rxjs';

//アプリケーションのどこからでも利用可能
@Injectable({
  providedIn: 'root'
})
export class TodoService{
  constructor(private http: HttpClient){}

  loadAll(offset?: number, limit?: number){
    //-------------------------
    //mockdata
    const todoList: Todo[] = [
      {id: '111', text: 'aaa'},
      {id: '222', text: 'bbb'},
      {id: '333', text: 'ccc'}
    ];
    //-------------------------

    const url = 'APIのアクセス先URL';
    let params = new HttpParams();
    params = offset ? params.set('offset', `${offset}`) : params;
    params = limit ? params.set('limit', `${limit}`) : params;
//    return this.http.get<Todo[]>(url, {params});
     return of(todoList);
  }
}

import {inject, Injectable} from '@angular/core';
import {UserInterface} from "../models/user.model";
import {map, Observable, of, switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PostModel} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)

  api = 'https://jsonplaceholder.typicode.com/posts'

  constructor() {
  }

  getAllUsers(): Observable<any> {

    const users: UserInterface[] = [
      {id: '1', name: 'Juma'},
      {id: '2', name: 'Ally'},
      {id: '3', name: 'Jack'},
    ];

    return of(users);

  }

  getAllPosts() : Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.api).pipe(
      // map((res) => res.id)
    );
  }

  getNumbers() {
    const numbers = of(1, 2, 3, 4, 6)
    const finalEffect = numbers.pipe(
        map( nums => nums * 2)
    )
    finalEffect.subscribe(x => {
      console.log(x)
    })
  }
}

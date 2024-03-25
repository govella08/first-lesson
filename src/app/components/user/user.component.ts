import {Component, computed, effect, inject, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {UserService} from "../../services/user.service";
import {RoleComponent} from "../role/role.component";
import {Observable, Subscription} from "rxjs";
import {PostModel} from "../../models/post.model";
import {AsyncPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RoleComponent, AsyncPipe, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [UserService]
})
export class UserComponent {

  userService = inject(UserService)
  posts$!: Observable<PostModel[]>

  age= signal(5);
  myAge = computed(() => this.age() * 2)



constructor() {
  effect(() => {
    console.log('Value of signal has changed')
  });
  // this.users$ = this.userService.getAllUsers().subscribe()
  // this.posts$ = this.userService.getAllPosts()
  this.age.set(9)
  this.age.update(val => val = 7)
}

}

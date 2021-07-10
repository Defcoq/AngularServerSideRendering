import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from './organization';
import { Repository } from './repository';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userUrl: string = '';
  constructor(private http: HttpClient) {
    this.userUrl = `${environment.apiUrl}/users/${environment.username}`;
  }

  getUser(): Observable<User> {

    return this.http.get<User>(`${environment.apiUrl}/users/${environment.username}`);

  }

  getRepos(): Observable<Repository[]> {

    return this.http.get<Repository[]>(this.userUrl +'/repos');

  }

  getOrganizations(): Observable<Organization[]> {

    return this.http.get<Organization[]>(this.userUrl +'/orgs');

  }
}

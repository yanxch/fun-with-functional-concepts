import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commit} from './commits.api';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/*

 For the NGRX implementation we use a standard Angular Service which uses HttpClient.
 The counterpart example is in the commits.api.ts, which uses fetch and is Angular independent.

*/

@Injectable()
export class CommitsService {
  constructor(private http: HttpClient) {}

  readCommitsByUsername(username: string): Promise<Commit[]> {
    return this.http.get(`https://api.github.com/users/${username}/events`)
      .pipe(map(toCommits))
      .toPromise();
  }

  readCommitsByUsername$(username: string): Observable<Commit[]> {
    return this.http.get(`https://api.github.com/users/${username}/events`)
      .pipe(map(toCommits));
  }
}

function toCommits(response: any[]) {
  const isPushEvent = (entry) => entry.type === 'PushEvent';

  return response
    .filter(isPushEvent)
    .reduce((commits, pushEvent) => 
      commits.concat(pushEvent.payload.commits.map(commit => // flatten commits
        new Commit(commit.sha, 
            pushEvent.repo.name, 
            commit.author.name, 
            pushEvent.created_at,
            commit.message))
        )  
    , []);
}
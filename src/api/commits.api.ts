// this class is driven by the Backend-API 
// whe should be aware of that
// 
export class Commit {

  constructor(public id: number,
              public repo: string,
              public createdBy: string,
              public createdAt: Date,
              public message: string) {

  }
}

export function readCommitsByUsername(username: string): Promise<Commit[]> {
  const url = `https://api.github.com/users/${username}/events`;

  return fetch(url)
    .then(toJson)
    .then(mapToCommits)
    .then(log);
}

function toJson(response: Response) {
  return response.json();
}

function mapToCommits(response: any[]) {
  const isPushEvent = (entry) => entry.type === 'PushEvent';

  return response
    .filter(isPushEvent)
    .reduce((commits, pushEvent) => 
      commits.concat(pushEvent.payload.commits.map(commit => 
        new Commit(commit.sha, 
            pushEvent.repo.name, 
            commit.author.name, 
            pushEvent.created_at,
            commit.message))
        )  
    , []);

}

function log(response) {
  console.log(response);
  return response;
}


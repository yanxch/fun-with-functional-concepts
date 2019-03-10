import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Commit} from 'src/api/commits.api';
import {LoadCommits} from 'src/state/actions/commits.actions';
import {Failure} from 'src/state/model/failure';
import {AppState} from 'src/state/reducers';
import {commitsAsRemoteData} from 'src/state/selectors/commits.selectors';
import {RemoteData} from '../components/remote-data/remote-data';

@Component({
  selector: 'commits-with-ngrx-remote-data',
  templateUrl: './commits-with-ngrx-remote-data.component.html',
  styleUrls: ['./commits-with-ngrx-remote-data.component.scss']
})
export class CommitsWithNgrxRemoteDataComponent implements OnInit, AfterViewInit {

  username = 'yanxch';

  commits$: Observable<RemoteData<Commit[], Failure[]>>;

  @ViewChild('content', {read: ViewContainerRef}) viewContainer: ViewContainerRef;

  @ViewChild('notAskedTemplate') notAskedTemplate: TemplateRef<any>;
  @ViewChild('loadingTemplate') loadingTemplate: TemplateRef<any>;
  @ViewChild('successTemplate') successTemplate: TemplateRef<any>;
  @ViewChild('failureTemplate') failureTemplate: TemplateRef<any>;

  constructor(private store: Store<AppState>) { 
    this.commits$ = this.store.select(commitsAsRemoteData);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.commits$.subscribe((remoteData: any) => {
      const { success, failure, loading, notAsked} = remoteData;

      if (success) {
        this.renderSuccessTemplate(success);
      }

      if (failure) {
        this.renderFailureTemplate(failure);
      }

      if (loading) {
        this.renderLoadingTemplate();
      }

      if (notAsked) {
        this.renderNotAskedTemplate();
      }
    });
  }

  onSearch() {
    this.store.dispatch(new LoadCommits({ username: this.username }));
  }

  private renderLoadingTemplate() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.loadingTemplate);
  }

  private renderSuccessTemplate(data: any) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.successTemplate, { success: data });
  }

  private renderFailureTemplate(error: any) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.failureTemplate, { failure: error });
  }

  private renderNotAskedTemplate() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.notAskedTemplate);
  }
}

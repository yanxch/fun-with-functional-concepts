import {Directive, Input, OnInit, TemplateRef, ViewContainerRef, OnChanges, SimpleChanges} from '@angular/core';
import {RemoteData} from './remote-data';
import {onChange} from 'src/app/util/input-changed';

export class RemoteDataContext<S,F> {
  success: S;
  failure: F;
}

@Directive({
  selector: '[remoteData]'
})
export class RemoteDataDirective<S,F> implements OnInit, OnChanges {

  context = new RemoteDataContext<S,F>();

  @Input()
  remoteData: RemoteData<S, F>;

  @Input()
  remoteDataOnSuccess: TemplateRef<RemoteDataContext<S,F>>;

  @Input()
  remoteDataOnFailure: TemplateRef<RemoteDataContext<S,F>>;  

  @Input()
  remoteDataOnNotAsked: TemplateRef<RemoteDataContext<S,F>>;

  @Input()
  remoteDataOnLoading: TemplateRef<RemoteDataContext<S,F>>;

  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit() {}

  ngOnChanges({ remoteData }: SimpleChanges) {
    onChange(remoteData, this.render);
  }

  private render(remoteData: any) {
    if (remoteData.loading) {
      this.renderLoadingTemplate();
    }

    if (remoteData.success) {
      this.renderSuccessTemplate(remoteData.success);
    }

    if (remoteData.failure) {
      this.renderFailureTemplate(remoteData.failure);
    }

    if (remoteData.notAsked) {
      this.renderNotAskedTemplate();
    }
  }

  private renderLoadingTemplate() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.remoteDataOnLoading, this.context);
  }

  private renderSuccessTemplate(data: any) {
    this.context.success = data;
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.remoteDataOnSuccess, this.context);
  }

  private renderFailureTemplate(error: any) {
    this.context.failure = error;
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.remoteDataOnFailure, this.context);
  }

  private renderNotAskedTemplate() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.remoteDataOnNotAsked, this.context);
  }
}


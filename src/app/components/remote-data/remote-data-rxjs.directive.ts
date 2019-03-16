import {Directive, Input, OnInit, TemplateRef, ViewContainerRef, OnChanges, SimpleChanges} from '@angular/core';
import {RemoteData} from './remote-data';

export class RemoteDataContext<S,F> {
  success: S;
  failure: F;
}

@Directive({
  selector: '[remoteDataRx]'
})
export class RemoteDataDirective<S,F> implements OnInit, OnChanges {

  context = new RemoteDataContext<S,F>();

  @Input()
  remoteDataRx: RemoteData<S,F>;

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

  ngOnChanges({ remoteData }: SimpleChanges) {}

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


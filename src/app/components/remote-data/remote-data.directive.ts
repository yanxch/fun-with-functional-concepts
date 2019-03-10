import {Directive, Input, OnInit, TemplateRef, ViewContainerRef, OnChanges, SimpleChanges} from '@angular/core';

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
  remoteData: Promise<S>;

  @Input()
  remoteDataOnSuccess: TemplateRef<RemoteDataContext<S,F>>;

  @Input()
  remoteDataOnFailure: TemplateRef<RemoteDataContext<S,F>>;  

  @Input()
  remoteDataOnNotAsked: TemplateRef<RemoteDataContext<S,F>>;

  @Input()
  remoteDataOnLoading: TemplateRef<RemoteDataContext<S,F>>;

  constructor(private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    if (this.remoteData) {
      this.loadData();
    } else {
      this.renderNotAskedTemplate();
    }
  }

  ngOnChanges({ remoteData }: SimpleChanges) {
    if (!remoteData.firstChange && remoteData.currentValue != remoteData.previousValue) {
      this.loadData();
    }
  }

  private loadData() {
    this.renderLoadingTemplate();
    this.remoteData.then(
      data => this.renderSuccessTemplate(data),
      error => this.renderFailureTemplate(error)
    );
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


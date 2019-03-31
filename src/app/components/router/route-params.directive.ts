import {Directive, OnInit, TemplateRef, ViewContainerRef, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

export class RouteParamsContext {
  [key: string]: any;
}

@Directive({
  selector: '[params]'
})
export class RouteParamsDirective implements OnInit, OnDestroy {

  context = new RouteParamsContext();

  private _routeParamsSubscription: Subscription;

  constructor(private template: TemplateRef<RouteParamsContext>,
              private viewContainer: ViewContainerRef,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.template, this.context);
    this._routeParamsSubscription = this.route
      .paramMap
      .subscribe((paramMap: any) => 
        // Copy all route params to the context
        Object.assign(this.context, paramMap.params)
      );
  }

  ngOnDestroy() {
    this._routeParamsSubscription.unsubscribe();
  }
}

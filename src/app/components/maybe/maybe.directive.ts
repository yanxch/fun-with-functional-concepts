import {Directive, Input, TemplateRef, ViewContainerRef, OnInit} from '@angular/core';

export class MaybeContext {
  some: any;
  none: any;
}

@Directive({
  selector: '[maybe]'
})
export class MaybeDirective<T> implements OnInit {

  context = new MaybeContext();

  @Input()
  maybe: Promise<T>;

  @Input()
  maybeSome: TemplateRef<MaybeContext>;

  @Input()
  maybeNone: TemplateRef<MaybeContext>;  

  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.maybe
      .then(value => {  
        Object.assign(this.context, { some: value, none: 'err' });
        this.viewContainer.createEmbeddedView(this.maybeSome, this.context);
        return value;
      })
      .catch(error => {
        Object.assign(this.context, { none: error });
        this.viewContainer.createEmbeddedView(this.maybeNone, this.context);
      })
  }
}
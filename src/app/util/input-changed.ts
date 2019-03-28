import {SimpleChange} from '@angular/core';

export function onChange(change: SimpleChange, callback: Function) {
  if (hasChanged(change)) {
    callback(change.currentValue);
  }
}

const hasChanged = (change: SimpleChange) => change.currentValue !== change.previousValue;
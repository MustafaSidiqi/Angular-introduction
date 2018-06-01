import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  name: "sort"
})

export class sortPipe implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }
}

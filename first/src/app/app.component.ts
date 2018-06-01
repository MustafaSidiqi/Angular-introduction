import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // obj = {
  //   id: "404",
  //   name: "Mustafa Sidiqi",
  //   isTrue: true
  // }
  //
  // myArr = ["abc", "xyz", "stu"];
  // myVariable = 99;
  // isFalse = true;

  Items = ["Ang 4", "React", "Underscore"];
  newItem = "";

  pushItem = function() {
    if(this.newItem != "") {
      this.Items.push(this.newItem);
      this.newItem = "";
    };
  }

  removeItem = function(index) {
    this.Items.splice(index, 1);
  };

}

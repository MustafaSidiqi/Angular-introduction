import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name = "Mustafa";
  // arr = "Mustafa Sidiqi";
form;
ngOnInit() {
  this.form = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    language: new FormControl("test"),
  });
}


//Template Driven Form
  onSubmit = function(user) {
    console.log(user);
  }
}

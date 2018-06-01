import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form;
    ngOnInit() {
      this.form = new FormGroup({
        decimal: new FormControl(""),
        binary: new FormControl(""),
        octal: new FormControl(""),
        hexa: new FormControl("")
      });
  }

  numChanged = function(oldVal, newVal) {
if(1) {
      this.form.patchValue({binary: parseInt(newVal, 10).toString(2)});
      this.form.patchValue({octal: parseInt(newVal, 10).toString(8)});
      this.form.patchValue({hexa: parseInt(newVal, 10).toString(16)});
    } else {
      this.form.patchValue({binary: ""});
      this.form.patchValue({octal: ""});
      this.form.patchValue({hexa: ""});
    }
  }
}

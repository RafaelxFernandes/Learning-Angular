import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the jungle';
  subtitle = '(sad Naruto intensifies)';

  ngOnInit(){
  	console.log(this.title);
  }
}
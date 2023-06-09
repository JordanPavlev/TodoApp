import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'TodoApp';


  ngOnInit() {
    window.addEventListener('beforeunload', function (event) {
      event.preventDefault();
      event.returnValue = '';
      var confirmationMessage = 'Are you sure you want to leave this page?';
      event.returnValue = confirmationMessage; // Modern browsers will ignore this, but it's required for Chrome compatibility
      return confirmationMessage;
    });
   }

}

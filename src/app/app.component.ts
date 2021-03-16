import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
}

// component html'in datasının yönetildiği yerdir
// [Array]
// class'a attribute olarak @Component verilmişse component class demektir

import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: ` 
                <nav class="navbar navbar-default">
                  <div class="container">
                    <div class="navbar-header">
                      <a class="navbar-brand" href="#">Angular CLI Proje</a>
                    </div>
                    <ul class="nav navbar-nav">    
                      <li routerLinkActive="active"><a routerLink="home">Home</a></li>    
                     <li routerLinkActive="active"><a routerLink="employees">Employees</a></li>     
                    </ul>                    
                  </div>
                </nav> 
                <router-outlet></router-outlet>
              `
})
export class AppComponent {    
    
}

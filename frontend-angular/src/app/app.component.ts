import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-gestform';
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Convertisseur',
        icon: 'pi pi-fw pi-list',
        routerLink: ['/numbers'],
      },
    ];
  }
}

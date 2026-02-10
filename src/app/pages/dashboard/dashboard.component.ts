import { Component } from '@angular/core';
import { TopBarComponent } from "../../component/top-bar/top-bar.component";
import { CartComponent } from "../../component/cart/cart.component";
import { SideBarComponent } from "../../component/side-bar/side-bar.component";
import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { MenuComponent } from "../../component/menu/menu.component";

@Component({
  selector: 'app-dashboard',
  imports: [SideBarComponent, CartComponent, MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

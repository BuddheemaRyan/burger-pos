import { Component } from '@angular/core';
import { TopBarComponent } from "../../component/top-bar/top-bar.component";
import { CartComponent } from "../../component/cart/cart.component";
import { SideBarComponent } from "../../component/side-bar/side-bar.component";

@Component({
  selector: 'app-dashboard',
  imports: [SideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

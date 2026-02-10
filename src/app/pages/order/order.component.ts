import { Component } from '@angular/core';
import { SideBarComponent } from "../../component/side-bar/side-bar.component";
import { CartComponent } from "../../component/cart/cart.component";

@Component({
  selector: 'app-order',
  imports: [SideBarComponent, CartComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

}

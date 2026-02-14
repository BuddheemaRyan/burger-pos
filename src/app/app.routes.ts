import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { AdminBoardComponent } from './pages/admin-board/admin-board.component';


export const routes: Routes = [

  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'admin',
    component: AdminBoardComponent
  }
];

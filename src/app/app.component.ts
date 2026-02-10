import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { computed,signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'burger';

  // food.service.ts or signal store
selectedItems = signal<any[]>([]);
total = computed(() => this.selectedItems().reduce((sum, item) => sum + item.price, 0));
}

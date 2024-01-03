import { Component, Input } from '@angular/core';
import { WishItem } from '../wishItem';
import events from '../../shared/services/EventService';


@Component({
  selector: 'app-list-wishes',
  templateUrl: './list-wishes.component.html',
  styleUrl: './list-wishes.component.css'
})
export class ListWishesComponent {
  @Input() wishes:WishItem[] = []

  toggle(item: WishItem) {
    events.emit('toggled','The observable bus is working');
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}

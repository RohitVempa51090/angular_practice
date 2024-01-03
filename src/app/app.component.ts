import { Component } from '@angular/core';
import { WishItem } from './wishItem';
import events from '../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items : WishItem[] = [
    // new WishItem('Learn Angular'),
    // new WishItem('Learn HTML', true),
    new WishItem('Learn CSS')
  ]
  title = 'wishlist';
  newWishItem = '';
  listFilter:string = '0';

  get visibleItems(): WishItem[]
  {
    let value = this.listFilter;
    if(value === '0')
    {
      return this.items;
    }
    else if(value === '1')
    {
      return this.items.filter((item)=>!item.isComplete)
    }
    else
    {
      return this.items.filter((item)=>item.isComplete)
    }
  }

  addNewWish()
  {
    console.log(this.newWishItem)
    if(this.newWishItem != '')
      this.items.push(new WishItem(this.newWishItem));
    console.log(this.items);
    this.newWishItem = '';
  }

  constructor()
  {
    events.listen('toggled',(e)=>{
      console.log(e);
    })
  }
}

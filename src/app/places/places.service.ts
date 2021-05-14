import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
        'p1', 
        'Manhattan Mansion', 
        'In the heart of new york city.', 
        'https://i.insider.com/5ca3681fffcb271dae70b893', 
        149.99
    ),
    new Place(
      'p2', 
      'L\'Amour Toujors', 
      'A romantic in Paris!', 
      'https://veja.abril.com.br/wp-content/uploads/2016/05/alx_lista-capitais-europa-mundo-20100806-002_original3.jpeg', 
      189.99
    ),
    new Place(
      'p3', 
      'The Foggy palace', 
      'Not your average city trip!', 
      'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg', 
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
}

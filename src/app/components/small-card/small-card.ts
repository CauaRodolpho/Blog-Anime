import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-small-card',
  styleUrl: './small-card.css',
  templateUrl: './small-card.html',
})
export class SmallCard {

    title = input<string>();
    description = input<string>();
    imageUrl = input<string>();
    date = input<string>();

}

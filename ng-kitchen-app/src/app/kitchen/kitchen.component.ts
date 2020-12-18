import { Component, OnInit } from '@angular/core';
import { FridgeItem } from '../fridge-item';
import { FridgeService } from '../fridge.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  fridgeContents: FridgeItem[] | null = null;

  constructor(private fridgeService: FridgeService) { }

  ngOnInit(): void {
    this.fridgeService.getFridgeItems()
      .then(items => {
        this.fridgeContents = items;
      });
    // arguably better would be to use observable here,
    // not even subscribing here, but in the component with AsyncPipe
    // but this is fine for now
  }
}

import { FieldTypes } from './../../shared/utils/models';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items!: any[];
  config: any[] = [
    { key: 'title' },
    { key: 'price', type: 'input' },
    { key: 'imgSrc', type: 'image', text: 'image' },
    { type: FieldTypes.button, text: 'more' },
    { type: FieldTypes.button, text: 'remove' },
  ];

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemsService.fetch().subscribe((resp) => {
      this.items = resp.data;
    })
  }

  onAction(action: any) {
    switch (action.type) {
      case 'more':
        this.router.navigate(['items', action.id])
        break;

      case 'remove':
        this.itemsService.remove(action.id).subscribe((resp: any) => {
          debugger;
        })
        break;

      default:
        break;
    }
  }

}

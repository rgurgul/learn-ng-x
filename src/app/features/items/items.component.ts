import { FieldTypes, ItemsFiltersModel } from './../../shared/utils/models';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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

  filters: BehaviorSubject<ItemsFiltersModel> = new BehaviorSubject<ItemsFiltersModel>({
    itemsPerPage: 5,
    currentPage: 1
  })

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.filters.subscribe((val) => {
      this.fetchItems();
    })
  }

  private fetchItems() {
    this.itemsService.fetch(this.filters.value).subscribe((resp) => {
      this.items = resp.data;
    });
  }

  updateFilters(value: Object) { //{itemsPerPage:10, x:1}
    this.filters.next({
      ...this.filters.value,
      ...value
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

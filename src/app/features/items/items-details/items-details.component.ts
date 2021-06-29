import { ItemsService } from './../../../services/items.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {


    })
  }

}

import { Observable } from 'rxjs';
import { ItemsService } from './../../../services/items.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent implements OnInit, OnDestroy {
  data: any;
  data$!: Observable<any>;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {

      this.itemsService.get(id).subscribe((resp) => {
        this.data = resp.data;
      })

      this.data$ = this.itemsService.get(id).pipe(map((resp) => resp.data));

    })
  }

}

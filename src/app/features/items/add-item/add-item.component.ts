import { ItemsService } from './../../../services/items.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content)
  }

  sendItem(data: any) {
    this.itemsService.add(data).subscribe((resp)=>{
      debugger;
    })

    this.modalService.dismissAll();

  }

}

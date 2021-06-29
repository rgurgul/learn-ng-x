import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() data!: any[];
  @Input() config!: any[];
  @Output() actionEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAction(type: any, id: any) {
    this.actionEmit.emit({ type, id })
  }

}

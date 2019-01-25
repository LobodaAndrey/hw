import { Component, OnInit } from '@angular/core';

@Component({
selector: 'table-head',
templateUrl: './table.component.html',
styleUrls: ['./table.component.sass'],
})
export class TableComponent {
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

}
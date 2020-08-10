import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  searchTerm: string = '';
  constructor() {}

  ngOnInit(): void {}

  onSearch(searchTerm) {
    this.search.emit(searchTerm);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: Quotes[];

  constructor() { }

  ngOnInit(): void {
  }

  deleteQuote = (id: any) => {
    this.quotes.splice(id, 1);
  };
}

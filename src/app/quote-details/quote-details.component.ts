import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() like = new EventEmitter();
  @Output() dislike = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  likeQuote = () => {
    this.like.emit();
  };
  dislikeQuote = () => {
    this.dislike.emit();
  };
}

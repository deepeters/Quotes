import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      1,
      'Strength',
      'The Strongest Man is he that stands alone',
      'Dennis Peters',
      'DP',
      new Date(2021, 8, 5),
      0,
      0,
      false
    ),
    new Quotes(
      1,
      'Fear',
      'Fear is only real in the brain, a simulation that may never happen',
      'Dennis Peters',
      'DP',
      new Date(2000, 10, 24),
      0,
      0,
      false
    ),
    new Quotes(
      1,
      'Racism',
      'Basing judgment on the colour of the skin is stupid, stop it',
      'Dennis Peters',
      'DP',
      new Date(2020, 10, 31),
      0,
      0,
      false
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewQuote = (quote: any) => {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.datePosted = new Date();
    this.quotes.push(quote);
  };

}

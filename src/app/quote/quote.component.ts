import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]= [
    new Quotes('If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him. We need not wait to see what others do.', 'Mahatma Gandhi', 'Moses Valei', new Date(2021,8,22)),
    new Quotes('My own personal preference is that the consumer, the individual person should be protected because individual people and the difference between individual people and the diversity we have between people on the planet is so important..','im Berners-Lee', 'Moses Valei', new Date(2021,8,22 )),
    new Quotes ('Experience is the name everyone gives to their mistakes','Coders', 'Moses Valei', new Date (2021,8,22))
    
  ]

  deleteQuote(event:boolean, index:number){
    let isTrue = confirm('Are you sure you want to delete this Quote?')

    if (isTrue) {
      this.quotes.splice(index, 1)
    }
  }


  addQuote(newQuote:Quotes){
    this.quotes.push(newQuote);

  }
  constructor() { }

  ngOnInit(): void {
  }

}

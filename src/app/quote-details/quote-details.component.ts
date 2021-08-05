import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() details:any
  quotes:any; Quotes: any;
  @Output() toDelete=new EventEmitter<boolean>();

  constructor() { }

  upvote=0; 
  downvote=0;

  upVote(){
    return this.upvote++;

  }

  downVote(){
    return this.downvote++;
  }
  isToDelete(){
    this.toDelete.emit()
  }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../../../src/app/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  
  @Input() 
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote(){
    this.quote.upvote+=1;
    
  }
  downvote(){
    this.quote.downvote+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

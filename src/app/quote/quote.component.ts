import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote( 1, ' "Technology is best when it brings people together." ',' — Matt Mullenweg, Entrepreneur.',0,0,new Date(2012,4,10)),
    new Quote(2, '"It has become appallingly obvious that our technology has exceeded our humanity."',' — Albert Einstein, Scientist.', 0,0,new Date(2012,4,10)),
    new Quote(3,'"Heroes share all their meat, but a pirate eats all the meat."','— Monkey D. Luffy, pirate.',0,0,new Date(2012,4,10)),
    new Quote(4,'"It is only when they go wrong that machines remind you how powerful they are."','—  Clive James, Broadcaster.',0,0,new Date(2012,4,10))
  
  ]
  
    first!: number;
    last!:number
    count!:number 
  
   highest(){
    this.first = 0
    this.last = 0
  
    for(this.count=0 ; this.count < this.quotes.length; this.count++) {
      this.last = this.quotes[this.count].upvote;
      if(this.last > this.first){this.first = this.last}
    }
    return  this.first
  }
  
  
   deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
  
    if (toDelete){
      this.quotes.splice(index,1)
    }
      
    }
  }
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  getCurrentYear() {
    let timeline = new Date();
    return timeline.getFullYear();
  }
  
  constructor() { }
  
  
    ngOnInit(): void {
    }
  
}

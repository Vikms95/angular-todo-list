import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

interface ISocialLinks {
  title: string;
  link: string;
  isActive: boolean;
}

@Component( {
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  counter = 0;
  name = 'Víctor';
  profession = 'Software Developer';
  textColorClass = 'white green_bg';
  linkStyle = 'underline';
  currentQuote = '';

  social_links: ISocialLinks[] = [
    { title: 'Facebook', link: "https://facebook.com/SabujXiP", isActive: false },
    { title: 'Twitter', link: "https://twitter.com/SabujXi", isActive: true },
    { title: 'Github', link: "https://github.com/SabujXi", isActive: true },
  ];

  quotes: string[] = [];

  handleClick () {
    this.counter++;
  }

  removeLink ( idx: number ) {
    this.social_links.splice( idx, 1 );
  }

  saveQuote () {
    if ( !this.currentQuote ) return;

    this.quotes.push( this.currentQuote );
  }

  removeQuote ( idx: number ) {
    this.quotes.splice( idx, 1 );
  }

  onChange ( event: Event ) {
    this.currentQuote = ( event.target as HTMLInputElement ).value;
  };

}

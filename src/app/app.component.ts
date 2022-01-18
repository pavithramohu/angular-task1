import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  bookName: string = '';
  bookDetails: any = [];
  value = false;
  showSpinner = false;
  errorMessage: string = "";
  constructor(private bookService: BookService) {}

  title = 'task';
  ngOnInit() {}

  show() {
    this.showSpinner = true;
    console.log(this.bookName);
    this.bookService.getBooksDetails(this.bookName).subscribe((d) => {
      //.log(d.docs[0]);
        this.bookDetails = d.docs[0];
        console.log(this.bookDetails);
        this.value = true;
        this.showSpinner = false;
    }, error => {
      this.errorMessage = " No data found";
      this.value = false;
      this.showSpinner = false;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/book.service';

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
  ngOnInit() {}
  show() {
    this.showSpinner = true;
    this.bookService.getBooksDetails(this.bookName).subscribe((d) => {
        this.bookDetails = d.docs[0];
        this.value = true;
        this.showSpinner = false;
    }, error => {
      this.errorMessage = "No data found";
      this.value = false;
      this.showSpinner = false;
    });
  }
}

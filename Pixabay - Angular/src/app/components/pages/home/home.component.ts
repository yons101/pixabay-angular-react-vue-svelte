import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: Array<any> = [];
  loading: boolean = true;
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getImages().subscribe((obj) => {
      this.images = obj['hits'];
      this.loading = false;
    });
  }

  search(searchTerm) {
    this.http.getImages(searchTerm).subscribe((obj) => {
      this.images = obj['hits'];
      this.loading = false;
    });
  }
}

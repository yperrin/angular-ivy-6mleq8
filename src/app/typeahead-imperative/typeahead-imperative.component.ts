import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'typeahead-imperative',
  templateUrl: './typeahead-imperative.component.html',
  styleUrls: ['./typeahead-imperative.component.css']
})
export class TypeaheadImperativeComponent {
  searchTerm = "";
  data: string[];

  constructor(private apiService: ApiService) { }

  changeSearchTerm(term) {
    this.apiService.fetchData(term).subscribe(data => (this.data = data));
  }

}
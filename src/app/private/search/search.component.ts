import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'esm-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  @Output() doSearch: EventEmitter<any> = new EventEmitter();

  constructor(private readonly _formBuilder: FormBuilder) {}

  handleChange($event: any): void {
    this.doSearch.emit($event);
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      query: [''],
    });
  }
}

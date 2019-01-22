import { Component, OnInit,Input } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countryselect.component.html',
  styleUrls: ['./countryselect.component.css']
})
export class CountryselectComponent implements OnInit {
  @Input('clist') countries:Country[];
  constructor() { }

  ngOnInit() {
  }

}

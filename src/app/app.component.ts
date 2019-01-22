import { Component } from '@angular/core';
import { CountryServiceService } from './services/country-service.service';
import { Country } from './model/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstone';
  types:string[]=['Vegetables','Fruits','Spices'];
  items:string[][]=
     [
       ['Onions','Carrot','Beans','Cabbage'],
       ['Grapes','Papaya','Banana','Apple'],
       ['Cinnamon','Cardamom','Pepper','Cummin seeds']
     ];
   countries:Country[];

     constructor(private cs:CountryServiceService){
        // this.countries=this.cs.getCountries();
        this.cs.getCountries().subscribe(
          (data:Country[])=>{this.countries=data},
          ()=>{alert('Not able to get the data')}
        )
        ;
       /*
        this.cs.getCountries().subscribe(function(data){
          this.countries=data;
        }.bind(this),function(){});
        */
     }

    
    
}

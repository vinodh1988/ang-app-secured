import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input('itemtype') type:string= "No Name";
  @Input('itemvalues') things:string[]= ["thing1","thing2","thing3","thing4"];
  theme:string="theme1";
  constructor() { }

  ngOnInit() {
  }

  toggleTheme(){
    this.theme=this.theme=="theme1"?"theme2":"theme1";
  }

}

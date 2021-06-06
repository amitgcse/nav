import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  items = [
    { displayName:'one', 
      subItems:[
        {displayName:'one.one', images:['1.1.1', '1.1.2', '1.1.3']},
        {displayName:'one.two', images: ['1.2.1', '1.2.2', '1.2.3']},
        {displayName:'one.three'},
      ]
    }, 
    { displayName:'two',
      subItems:[
        {displayName:'two.one'},
        {displayName:'two.two'},
        {displayName:'two.three'},
      ]
    }, 
    { displayName:'three',
      subItems:[
        {displayName:'three.one'},
        {displayName:'three.two'},
        {displayName:'three.three'},
      ]
    }
  ]

  selectedCategory = 'one.one'

  constructor() { }

  ngOnInit(): void {
  }

}

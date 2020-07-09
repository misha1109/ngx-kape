import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent implements OnInit {
  gridArr: any[];
  // Data of the comparision between products
  // Each item represents a column
  featuresColumns = [
    {
      items: [
        'asdjasld qweqwe asdasd', 'asdasdqwe', 'vb tfghvc', 'tert ', 'gdf ', 'dfgdgdfgr r r r dgdfg', 'asdqw  wwqe sss'
      ],
      styles: {
        background: 'var(--white)',
        color: 'var(--grey)',
        justifyContent: 'left'
      }
    },
    {
      heading: {
        title: 'The Free Awesome Tool',
        icon: '/assets/images/logo/logo_icon_red.svg'
      },
      items: [
        'bla bla', 'bla bla', 'bla bla', 'bla bla', false, false, false,
      ],
      buy: {
        title: 'get awesome for free',
        url: ''
      },
      styles: {
        background: 'var(--grey)',
        color: 'var(--white)',
        justifyContent: 'center'
      }
    },
    {
      heading: {
        title: 'Ultimate Awesome Tool',
        icon: '/assets/images/logo/logo_icon_white.svg'
      },
      items: [
        'la la la', 'la la la', 'la la la', 'la la la', true, true, true,
      ],
      buy: {
        title: 'start free trial',
        url: ''
      },
      styles: {
        background: 'rgb(var(--red))',
        color: 'var(--white)',
        justifyContent: 'center'
      }
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}

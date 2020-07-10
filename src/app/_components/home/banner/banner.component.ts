import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // TODO: add interfaces
  baseAssetUrl = '/assets/images/banner/';
  // Paragraphs data
  paragraphs = [
    {
      text: 'Lorem ipsum dolor sit elit',
      weight: 'bold',
      size: '28',
      style: 'italic',
    },
    {
      text: 'idunt aliquet. Vivamus quis volut',
      size: '18'
    },
    {
      text: 'with',
      weight: 'bold',
      size: '18',
      style: 'italic'
    },
    {
      text: 'Vestibulum commodo',
      weight: 'bold',
      size: '20'
    },
    {
      text: 'Curabitur Mollils',
      weight: 'bold',
      size: '40',
      color: 'rgb(var(--red))',
      style: 'italic'
    },
    {
      text: 'sed finibus',
      weight: 'bold',
      size: '20',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

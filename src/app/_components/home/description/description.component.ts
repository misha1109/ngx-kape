import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  heading = 'PELLENTESQUE AT ORCI VESTIBULUM, VARIUS IPSUM';
  // Paragraphs
  paragraphs = [
    {
      text: 'Vivamus quis pharetra nisl',
      weight: 'bold',
      size: '20',
      style: 'italic',
      color: 'rgb(var(--red))',
      padding: '0'
    },
    {
      text: 'Morbi consectetur sollicitudin neque nec accumsan. Suspendisse potenti. Proin eleifend et ex et egestas. Ut in velit in turpis ultricies posuere. Etiam orci erat, ultricies vel tortor in, ultricies molestie augue. Quisque placerat tellus vel elit iaculis aliquam. Morbi suscipit nulla ut risus tempus sollicitudin.',
      size: '18',
      color: 'rgb(var(--grey-blue))',
      padding: '2em 0 0.5em'
    },
    {
      text: 'Maecenas mattis dignissim leo eget venenatis. Sed eu nibh dui. Donec scelerisque finibus enim at auctor. Phasellus viverra tellus non magna aliquet laoreet. Nulla volutpat porttitor turpis, ut rutrum eros fringilla quis. Cras sit amet elementum lorem. Proin quis placerat erat. Maecenas erat tortor, congue quis pellentesque non, ultrices non risus. Curabitur elementum at ante eu malesuada.',
      size: '18',
      color: 'rgb(var(--grey-blue))',
      padding: '2em 0 0.5em'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

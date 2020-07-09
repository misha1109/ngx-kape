import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  @Input() text: string;
  @Input() weight: string;
  @Input() style: string;
  @Input() size: number;
  @Input() color: string;
  @Input() padding: string;
  @Input() align: string;
  styles;
  constructor() { }

  ngOnInit(): void {
    this.styles = {
      fontWeight: this.weight || 'normal',
      fontStyle: this.style || '',
      fontSize: this.size + 'px',
      color: this.color,
      padding: this.padding || '0',
      textAlign: this.align || 'center'
    };
  }

}

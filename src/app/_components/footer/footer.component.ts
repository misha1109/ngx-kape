import { Component, OnInit } from '@angular/core';
import {AssetsService} from '../../_services/assets.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navItems;
  copyright: string;
  bottomItems = [
    {
      title: `Copyright \u00A9 ${new Date().getFullYear()} The Great Editor Tool inc.`,
      url: 'something'
    },
    {
      title: 'Terms Of Use',
      url: 'terms'
    },
    {
      title: 'Privacy Policy',
      url: 'privacy'
    }
  ];
  constructor(
    private assetService: AssetsService,
  ) { }

  async ngOnInit() {
    this.navItems = await this.assetService.getJson('navigation');
  }
}

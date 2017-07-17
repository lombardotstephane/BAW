import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.language = this.translateService.currentLang;
  }

  switchToLang(language: string) {
    this.translateService.use(language);
    this.language = language;
    return false;
  }

}

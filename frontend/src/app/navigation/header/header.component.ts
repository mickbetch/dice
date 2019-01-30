import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() changeLanguage = new EventEmitter<string>();
  @Output() toggleSidenav = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  onChangeLanguage(event) {
    this.changeLanguage.next(event);
  }
}

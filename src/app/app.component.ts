import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Typed from 'typed.js';
import { FunctionsService } from './services/functions.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activePage = {
    fpActive: false,
    spActive: false,
    tpActive: false,
    fopActive: false,
    fipActive: false
  }
  activeSection: string | null = null;
  renderer: any;

  constructor(private el: ElementRef<HTMLElement>, private functions: FunctionsService) { }

  ngOnInit(): void {
    this.activateNavbarItem()
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.activateNavbarItem()
    this.findActivePage()
  }

  private activateNavbarItem() {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
    const scrollPosition: number = window.scrollY;
    this.activeSection = this.functions.calculateActiveSection(sections, scrollPosition);
  }

  private findActivePage() {
    switch (this.activeSection) {
      case 'sfp': this.activePage.fpActive = true;
        break;
      case 'ssp': this.activePage.spActive = true;
        break;
      case 'stp': this.activePage.tpActive = true;
        break;
      case 'sfop': this.activePage.fopActive = true;
        break;
      case 'sfip': this.activePage.fipActive = true;
        break;
      default:
        return;
    }
  }

}


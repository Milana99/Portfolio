import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Portfolio';

  activeSection: string | null = null;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.navbarActiveItem()
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.navbarActiveItem()
  }

  navbarActiveItem() {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
    const scrollPosition: number = window.scrollY;
    this.activeSectionCalculate(sections, scrollPosition);
  }

  activeSectionCalculate(sections: NodeListOf<HTMLElement>, scrollPosition: number) {
    sections.forEach((section: HTMLElement) => {
      const top: number = section.offsetTop - 300;
      const bottom: number = top + section.offsetHeight;
      const sectionId: string | null = section.getAttribute('id');

      if (sectionId && scrollPosition >= top && scrollPosition < bottom) {
        this.activeSection = sectionId;

      }
    });
  }
}


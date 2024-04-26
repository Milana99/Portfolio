import { Injectable } from '@angular/core';
import Typed from 'typed.js';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  startTypingEffect(text: string, HTMLElementID: string) {
    const options = {
      strings: [text],
      typeSpeed: 50,
      loop: false,
      showCursor: false
    };
    const typed = new Typed(HTMLElementID, options);
  }

  calculateActiveSection(sections: NodeListOf<HTMLElement>, scrollPosition: number) {
    var activeSection = ''
    sections.forEach((section: HTMLElement) => {
      const top: number = section.offsetTop - 300;
      const bottom: number = top + section.offsetHeight;
      const sectionId: string | null = section.getAttribute('id');

      if (sectionId && scrollPosition >= top && scrollPosition < bottom) {
        activeSection = sectionId;
      }

    });
    return activeSection;
  }

}

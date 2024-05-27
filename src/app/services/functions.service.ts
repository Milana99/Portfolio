import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import Typed from 'typed.js';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

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
        this.renderer.removeClass(section, "hidden");
      }
      //else {
      //this.renderer.addClass(section, "hidden");
      //} 

    });
    return activeSection;
  }

  capitalizeFirstLetter(word: string) {
    return word[0].toUpperCase() + word.slice(1);
  }


}

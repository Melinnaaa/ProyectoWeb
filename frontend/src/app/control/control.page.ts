import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    this.setupEventListeners();
  }

  setupEventListeners(): void {
    document.body.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.nodeName === "A") {
        e.preventDefault();
      }
    });
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.which) {
      case 37: this.dir('left'); break;
      case 39: this.dir('right'); break;
      case 38: this.dir('up'); break;
      case 40: this.dir('down'); break;
    }
  }

  dir(dir: string): void {
    const dpads: HTMLElement[] = Array.from(document.getElementsByClassName('d-pad')) as HTMLElement[];
    const opads: HTMLElement[] = Array.from(document.getElementsByClassName('o-pad')) as HTMLElement[];
    const els: HTMLElement[] = [...dpads, ...opads];

    els.forEach((el: HTMLElement) => {
      const d: boolean = el.className.includes('d-');
      const what: string = d ? 'd-pad' : 'o-pad';
      console.log(what);
      el.className = `${what} ${dir}`;
    });
  }
}

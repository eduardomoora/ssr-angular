import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``
})
export default class AboutComponent implements OnInit{
  #title = inject(Title);
  #meta =  inject(Meta)
  ngOnInit(): void {
    this.#title.setTitle('About Page')
    this.#meta.updateTag({name :'description', content:'this is the about page '});
    this.#meta.updateTag({name:'og:title', content:' about page '});
    this.#meta.updateTag({name:'keywords', content:'about page,it,coding,ssr'});
  }

}

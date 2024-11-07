import {ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``
})
export  default class PricingComponent implements OnInit{
  #title = inject(Title);
  #meta =  inject(Meta);
  #platform =  inject(PLATFORM_ID);
  ngOnInit(): void {
    this.#title.setTitle('Pricing Page');
    this.#meta.updateTag({name :'description', content:'this is the Pricing page '});
    this.#meta.updateTag({name:'og:title', content:' pricing page '});
    this.#meta.updateTag({name:'keywords', content:'pricing page,it,coding,ssr'});
    console.log(this.#platform);
    console.log( isPlatformBrowser(this.#platform))
  }

}

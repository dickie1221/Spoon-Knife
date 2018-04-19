import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.owl-carousel-two').owlCarousel({
    margin:48,
    loop: false,
    dots: true,
    nav: false,
    center: true,
    autoWidth:true,
    items: 4,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
    });

  }

}

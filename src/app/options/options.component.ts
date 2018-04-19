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
	jQuery('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:500,
    autoplayHoverPause:false
	})

  }

}

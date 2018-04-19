import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	jQuery('.owl-carousel-one').owlCarousel({
    margin:48,
    loop:true,
    dots: false,
    autoWidth:true,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            loop:true
        }
      }
    });

    jQuery('.owl-carousel-two').owlCarousel({
    loop:true,
    margin:48,
    nav:true,
    items:4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
      }
  });
  }

}

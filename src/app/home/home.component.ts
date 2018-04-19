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
  	jQuery('.owl-carousel').owlCarousel({
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
})

    var owl = jQuery('.owl-carousel2');
    owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
    });
    jQuery('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    jQuery('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
  }

}

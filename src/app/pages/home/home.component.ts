import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homePageData: Array<HomePageData>;

  ngOnInit() {
    this.homePageData = [
      {
        author: 'angular university',
        date: '26 May 2016',
        resource: `http://blog.angular-university.io/angular-2-universal-meet-the-internet-of-the-future-seo-friendly-single-page-web-apps/`,
        subtitle: `There has been a lot of talk about Angular in the last few months and how to use it to build client apps,
         but one of its most important innovations is actually happening on the server.`,
        title: 'Angular Universal In Practice - How to build SEO Friendly Single Page Apps with Angular',
        url: 'https://angular-university.io/'
      },
      {
        author: 'toddmotto',
        date: 'Mar 22, 2016',
        resource: 'https://toddmotto.com/transclusion-in-angular-2-with-ng-content',
        subtitle: `Projection is a very important concept in Angular. It enables developers to build reusable components
          and make applications more scalable and flexible`,
        title: 'Angular Content Projection',
        url: 'https://twitter.com/intent/follow?original_referer=https%3A%2F%2Ftoddmotto.com%2Ftransclusion-in-angular-2-with-ng-content&ref_src=twsrc%5Etfw&region=follow_link&screen_name=toddmotto&tw_p=followbutton'
      },
      {
        author: 'john papa',
        date: '17 SEPTEMBER 2016',
        resource: 'https://johnpapa.net/introducing-angular-modules-feature-modules-2/',
        subtitle: 'NgModules help organize an application into cohesive blocks of functionality.',
        title: 'Angular Modules',
        url: 'https://twitter.com/john_papa'
      }
    ];
  }

}

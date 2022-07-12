import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
    title = 'morpheusUsers-app';

    ngAfterViewInit() {
        // window.addEventListener('DOMContentLoaded', event => {
        // Activate Bootstrap scrollspy on the main nav element
        //     const mainNav = document.body.querySelector('#mainNav');
        //     if (mainNav) {
        //         new bootstrap.ScrollSpy(document.body, {
        //             target: '#mainNav',
        //             offset: 74,
        //         });
        //     }
        //     // Collapse responsive navbar when toggler is visible
        //     const navbarToggler : any = document.body.querySelector('.navbar-toggler');
        //     const responsiveNavItems : any = [].slice.call(
        //         document.querySelectorAll('#navbarResponsive .nav-link')
        //     );
        //     responsiveNavItems.map(function (responsiveNavItem : any) {
        //         responsiveNavItem.addEventListener('click', () => {
        //             if (
        //                 window.getComputedStyle(navbarToggler).display !==
        //                 'none'
        //             ) {
        //                 navbarToggler.click();
        //             }
        //         });
        //     });
        // });
    }
}

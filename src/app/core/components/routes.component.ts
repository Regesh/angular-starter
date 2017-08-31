import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector:'routes',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:`
    <nav>
        <ul>
            <li *ngFor="let route of routes">
                <!-- is internal -->
                <button class="button" *ngIf="!route.is_external" [routerLink]="route.link"><span>{{route.title}}</span></button>
                <!-- is external -->
                <button class="button" *ngIf="route.is_external" (click)="openLink(route.link)"><span>{{route.title}}</span></button>
            </li>
        </ul>
    </nav>
    `
})
export class RoutesComponent{
    @Input() routes;
    @Input('sdk-loaded') sdkLoaded = false;
    openLink(link){
        window.open(link,'_self');
    }
}
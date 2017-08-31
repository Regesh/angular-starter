import { Component } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
    selector:'anim',
    template:`
    <div id="container"
    [@listAnimation]="items.length"
    >
        <h1>hello</h1>
        <button (click)="pushItem()">add item</button>
        <button (click)="removeItem()">remove item</button>

        <div id="list" *ngFor="let item of items">
            {{item}}
        </div>

    </div>

     <div data-id="second-container" @explainerAnim (@explainerAnim.done)="animationFinished($event)">
      <div class="col">
        <p>I think Coursetro is one of the best learning resources online for Angular</p>
      </div>
      <div class="col">
        <p>I think Coursetro is one of the best learning resources online for Angular</p>
      </div>
      <div class="col">
        <p>I think Coursetro is one of the best learning resources online for Angular</p>
      </div>
    <div>
  </div>
    `,
    styleUrls: [
    './animation.component.scss'
  ],
    animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))
        ]), {optional: true})

      ])
    ]),

    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.col', [
          animate(1000, style('*'))
        ])
        
      ])
    ])

  ]
})
export class AnimationComponent{
    items = [];
    constructor(){
        this.items = ['hey this is an item','another item','this is awesome'];
    }
    animationFinished(item){
        debugger;
    }
    pushItem(){
        this.items.push('oh yeah that is awesome');
    }
    removeItem(){
        this.items.pop();
    }
}
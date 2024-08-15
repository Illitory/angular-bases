
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>{{counter}}</h3>

<button (click)="increasyBy();">+1</button>
<button (click)="reset();">Reset</button>
<button (click)="decrementBy();">-1</button>
    `
})

export class CounterComponent implements OnInit {
    public title: string = 'mi primera aplicacion en angular1'
    public counter: number = 10;
    constructor() { }

    ngOnInit() { }

    increasyBy() {
        this.counter += 1;
    }
    decrementBy() {
        this.counter -= 1;
    }
    reset() {
        this.counter = 10;
    }
}
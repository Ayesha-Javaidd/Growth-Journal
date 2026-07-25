import { Component, Input } from '@angular/core';

@Component({
selector:'app-focus-card',
standalone:true,
imports:[],
templateUrl:'./focus-card.html',
styleUrl:'./focus-card.css'
})
export class FocusCard{

@Input() title='';

@Input() description='';

@Input() duration='';

}
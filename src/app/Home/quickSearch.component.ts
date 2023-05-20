import { Component,OnInit } from "@angular/core";
import {IMeal} from '../models/meal.model';
import { HomeService } from '../services/Home.service';


@Component({
    selector: 'app-quickSearch',
    templateUrl: './quickSearch.component.html',
    styleUrls: ['./quickSearch.component.css']
})

export class QuickSearchComponent implements OnInit {
    img1:string="../../assets/images/dinner.png";
    price:number = 221;
    openedOn  = Date.now()
    mealData:IMeal[] = [];

    constructor(private homeService:HomeService){}

    ngOnInit(): void {
      this.homeService.getMeal()
        .subscribe((data:IMeal[]) => this.mealData = data)
    }
}
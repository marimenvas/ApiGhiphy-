import { Component, OnInit, OnDestroy } from '@angular/core';
import { DadosService } from '../dados.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gif-image',
  templateUrl: './gif-image.component.html',
  styleUrls: ['./gif-image.component.css']
})
export class GifImageComponent implements OnInit,OnDestroy {
  gifs: any[] = [];
  subscription: Subscription

  constructor(private dataService: DadosService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.subscription = this.dataService.getGifs()
      .subscribe((response: any) => {

        this.gifs = response;  
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

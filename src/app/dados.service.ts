import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  gifs = new BehaviorSubject<any>([]);


  constructor(private http: HttpClient) { }

  getTrendingGifs() {

    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=q3KL1Oq7R4hbn77N57KjfCEYCW0SiGJC&limit=24&rating=g`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }
  searchGifs(gifName: string) {

    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=q3KL1Oq7R4hbn77N57KjfCEYCW0SiGJC&q=Dimitir&limit=24&offset=0&rating=g&lang=en`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    }); 
  }

  getGifs() {
    return this.gifs.asObservable();

  }
}

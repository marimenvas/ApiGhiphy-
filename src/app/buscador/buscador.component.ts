import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
  }
  search(searchTerm: string) {
    if (searchTerm !=='') {
      this.dadosService.searchGifs(searchTerm);
    }
  }

}



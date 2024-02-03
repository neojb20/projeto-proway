import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produtos } from '../produtos';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao = "";

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void{

  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}});
      return;
    }

    this.router.navigate(["produtos"]);

  }

}


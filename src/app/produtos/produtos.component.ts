import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if(descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao!) );
        return;
      }

      this.produtos = produtos;
    });
  }

}

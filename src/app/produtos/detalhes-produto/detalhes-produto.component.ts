import { IProdutoCarrinho } from './../../produtos';
import { CarrinhoService } from './../../carrinho.service';
import { NotificacaoService } from './../../notificacao.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined; 
  
    quantidade = 1;

  constructor (
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private NotificacaoService: NotificacaoService, 
    private CarrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const produtoId = Number(routeParams.get("id"));
      this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.NotificacaoService.notificar("O produto foi adicinionado ao carrinho.");
    const produto: IProdutoCarrinho  = {
      ...this.produto!,
      quantidade: this.quantidade,
    }

    this.CarrinhoService.adcionarAoCarrinho(produto);

  }

}

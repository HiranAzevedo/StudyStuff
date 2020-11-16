﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace Alura.Loja.Testes.ConsoleApp
{
    class ProdutoDAOEntity : IProdutoDAO, IDisposable
    {
        private readonly LojaContext contexto;

        public ProdutoDAOEntity()
        {
            contexto = new LojaContext();
        }

        public void Adicionar(Produto p)
        {
            contexto.Produtos.Add(p);
            contexto.SaveChanges();
        }

        public void Atualizar(Produto p)
        {
            contexto.Update(p);
            contexto.SaveChanges();
        }

        public void Dispose()
        {
            contexto.Dispose();
        }

        public IList<Produto> Produtos()
        {
            return contexto.Produtos.ToList();
        }

        public void Remover(Produto p)
        {
            contexto.Remove(p);
            contexto.SaveChanges();
        }
    }
}

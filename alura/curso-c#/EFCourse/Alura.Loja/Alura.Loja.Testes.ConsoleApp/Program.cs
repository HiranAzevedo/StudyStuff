using System;
using System.Linq;

namespace Alura.Loja.Testes.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            //GravarUsandoAdoNet();
            GravarUsandoEntity();
            RecuperarProduto();
            ExcluirProduto();
            AtualizarProduto();

            Console.Read();
        }

        private static void AtualizarProduto()
        {
            GravarUsandoEntity();
            RecuperarProduto();

            using (var context = new ProdutoDAOEntity())
            {
                var produto = context.Produtos().FirstOrDefault();
                produto.Nome = "Novo nome";
                context.Atualizar(produto);
                Console.WriteLine(produto.Nome);
            }
        }

        private static void ExcluirProduto()
        {
            using (var context = new ProdutoDAOEntity())
            {
                var produtos = context.Produtos().ToList();
                foreach (var item in produtos)
                {
                    context.Remover(item);
                }
            }
        }

        private static void RecuperarProduto()
        {
            using (var context = new ProdutoDAOEntity())
            {
                var produtos = context.Produtos().ToList();
                foreach (var prod in produtos)
                {
                    Console.WriteLine(prod.Nome);
                }
            }
        }

        private static void GravarUsandoEntity()
        {
            Produto p = new Produto
            {
                Nome = "Harry Potter e a Ordem da Fênix",
                Categoria = "Livros",
                Preco = 19.89
            };

            using (var context = new ProdutoDAOEntity())
            {
                context.Adicionar(p);
            }
        }

        private static void GravarUsandoAdoNet()
        {
            Produto p = new Produto
            {
                Nome = "Harry Potter e a Ordem da Fênix",
                Categoria = "Livros",
                Preco = 19.89
            };

            using (var repo = new ProdutoDAO())
            {
                repo.Adicionar(p);
            }
        }
    }
}

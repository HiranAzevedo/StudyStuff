using Microsoft.EntityFrameworkCore;
using System;

namespace Alura.Loja.Testes.ConsoleApp
{
    internal class LojasContext : DbContext
    {
        public DbSet<Produto> Produtos { get; set; }
    }
}
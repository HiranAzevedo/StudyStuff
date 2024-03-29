﻿using System.Text.RegularExpressions;

namespace EditorHtml
{
    internal class Viewer
    {
        public static void Show(string text)
        {
            Console.Clear();
            Console.BackgroundColor = ConsoleColor.White;
            Console.ForegroundColor = ConsoleColor.Black;
            Console.Clear();
            Console.WriteLine("MODO VISUALIZACAO");
            Console.WriteLine("--------------");
            Replace(text);
            Console.WriteLine("--------------");
            Console.ReadKey();
            Menu.Show();
        }

        public static void Replace(string text)
        {
            var strongRegex = new Regex(@"<\s*strong[^>]*>(.*?)<\s*/\s*strong>");
            var words = text.Split(' ');

            for (int i = 0; i <= words.Length; i++)
            {
                if (strongRegex.IsMatch(words[i]))
                {
                    Console.ForegroundColor = ConsoleColor.Blue;
                    Console.Write(words[i].Substring(words[i].IndexOf('>') + 1, (words[i].LastIndexOf('<') - 1) - words[i].IndexOf('>')));
                    Console.Write(' ');
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Black;
                    Console.Write(words[i]);
                    Console.Write(' ');
                }
            }
        }
    }
}

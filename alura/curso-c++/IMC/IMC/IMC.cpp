#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
	int peso = 0;
	float altura = 0;
	float Imc = 0;
	cout << "Ola, sou uma calculadora de IMC" << endl;
	cout << "Por favor me diga qual a seu peso" << endl;
	cin >> peso;
	cout << "Agora me informe a sua altura (usando . como separador)" << endl;
	cin >> altura;

	Imc = peso / (altura * altura);

	cout << "Seu imc e de " << endl;
	cout << Imc;
}
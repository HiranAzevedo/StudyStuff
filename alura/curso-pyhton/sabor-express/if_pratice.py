number = int(input("Digite um número: "))

if number % 2 == 0:
    print("Número par")
else:
    print("Número ímpar")

idade = int(input("Digite sua idade: "))

if idade > 0 & idade < 18:
    print("Criança")

elif idade > 13 & idade < 18:
    print("Adoslecente")

else:
    print("Adulto")

nome = input("Digite seu nome: ")
senha = input("Digite sua senha: ")

if nome == "admin" and senha == "admin":
    print("Bem-vindo admin")

else:
    print("Usuário inválido")


cordernadasX = int(input("Digite a cordenada X: "))
cordernadasY = int(input("Digite a cordenada Y: "))

if cordernadasX > 0 and cordernadasY > 0:
    print("Primeiro quadrante")

elif cordernadasX < 0 < cordernadasY:
    print("Segundo quadrante")

elif cordernadasX < 0 and cordernadasY < 0:
    print("Terceiro quadrante")

else:  
    print("Quarto quadrante")






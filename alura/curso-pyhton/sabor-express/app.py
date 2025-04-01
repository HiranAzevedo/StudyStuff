import os

restaurantes = ['Pizza', 'Hamburguer', 'Sushi', 'Churrasco']

def show_header():
    print("""
      𝚂𝚊𝚋𝚘𝚛 𝙴𝚡𝚙𝚛𝚎𝚜𝚜: ADMIN APP
       """)

def show_menu():
    print("Selecione uma opção:")
    print("1. Cadastrar restaurante")
    print("2. Listar restaurante")
    print("3. Ativar restaurante")
    print("4. Sair \n")

def opcao_invalida():
    print("Opção inválida")
    input("\n Pressione ENTER para continuar...")
    main()

def close_app():
    os.system('cls')
    print("Fechando aplicativo...")
    exit()

def listar_restaurantes():
    os.system('cls')
    print("Listar restaurantes \n")
    if len(restaurantes) == 0:
        print("Nenhum restaurante cadastrado")
    else:
        for i in restaurantes:
            print(i)
    input("\n Pressione ENTER para continuar...")
    main()

def cadastrar_novo_restaurante():
    os.system('cls')
    print("Cadastrar novo restaurante \n")
    nome_restaurant = input("Digite o nome do restaurante: ")
    restaurantes.append(nome_restaurant)
    print(f"Restaurante {nome_restaurant} cadastrado com sucesso!\n")
    input("Pressione ENTER para continuar...")
    main()


def choose_option():
    try:
        opt_select = int(input("Digite a opção desejada: "))
        print(f"Opção selecionada: {opt_select}")

        if opt_select == 1:
            cadastrar_novo_restaurante()

        elif opt_select == 2:
            listar_restaurantes()

        elif opt_select == 3:
            print("Ativar restaurante")

        elif opt_select == 4:
            close_app()

        else:
            opcao_invalida()
    except:
        opcao_invalida()


def main():
    os.system('cls')
    show_header()
    show_menu()
    choose_option()


if __name__ == "__main__":
    main()










# desafio-backend-cubos

  Criação de uma API Rest utilizando as tecnologias:
  - Typescript
  - Node.js

   -Utilizei a arquitetura MVC  estruturando as pastas e arquivos da aplicação afim de separar as responsabilidades de cada tipo de arquivo.  


## Rodar Localmente

```sh
yarn install

# start the server api
yarn dev

```

# Bibliotecas utilizdas

- Express
    - sem opinião. Dá a liberdade de criar a estrutura da forma que a gente quiser.
    - Ótimo para utilizar micro-serviços;
- Nodemon
    - instalei essa dependência em modo de desenvolvimento
    - reinicia aplicação de forma automática caso haja alguma alteração;
- Sucrase
    - Possibilita a utilização de  funcionalidade do JavaScript que o node ainda não suporta.
    - Estou utilizando por questão de preferência.
- Date-fns
    - facilita a manipulação do tipo Data.


# EndPoints 

```sh

//GET
# Listar regras criadas
http://localhost:3333/appointments

# Listar os horários disponíveis criados pelas regras
http://localhost:3333/schedules

//DELETE
# Remover uma regra informando o id
http://localhost:3333/appointment/:id

//POST
# Criação de regras

http://localhost:3333/appointments
 
é prciso passar no body da requisição:
# Se for cadastrar uma regra específica:
{
	"type": "specific",
	"date":"dd-MM-yyyy",
	"intervals":[
			{ 				
				"start": "HH:mm",
				"end": "HH:mm"
			}		
	]
}

# Se for cadastrar uma regra diária:
{
	"type": "daily",
		"intervals":[
			{ 				
				"start": "HH:mm",
				"end": "HH:mm"
			}		
	]
}

# Se for cadastrar uma regra semanal:
{
	"type": "weekly",
	"days":["0", "1"],
	"intervals":[
			{ 				
				"start": "HH:mm",
				"end": "HH:mm"
			}		
	]
}
# obs: os dias da semana estão enumeros de 0 a 6. No exemplo acima
# será passado segunda e terça;

```
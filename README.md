# Frontend e Backend Tests in pipeline GitHub Actions

# PT-BR
Testes de frontend e backend utilizando Cypress como framework de teste e o Github Actions como estrutura de pipeline

Para o frontend foi usado o site saucedemo.com e para o backend a api  jsonplaceholder.typecode.com.



![image](https://github.com/user-attachments/assets/ed9b6fee-9021-4b38-9ae3-d4dd0bb01cb7)


Figura 1 - Árvore da estrutura de testes com Cypress

Instalação:
Após realizar o git clone do projeto, realize os seguintes passos para rodar o teste com sucesso:
1) Primeiro, você precisará clonar o repositório localmente. Execute o seguinte comando no terminal ou Git Bash:
git clone https://github.com/fellipemacena/Saucedemo_GitHubActions.git

2) Abra o VS Code, no terminal digite:
npm install

3) Abra a interface do Cypress para garantir que ele está instalado corretamente
npm run cypress:open
Obs: Caso o Cypress não abra corretamente ir no terminal e digitar: npm install cypress --save-dev

4) Executar os testes em modo headless
npm run cypress:run

5) Rodar apenas testes de frontend
npm run test:frontend

6) Rodar apenas testes de backend (API)
npm run test:backend

7) Pipeline de GitHub Actions:
Caso deseja verificar como a integração contínua (CI) está configurada no GitHub Actions, siga estes passos:
Vá até a aba Actions no repositório do GitHub.
A cada push ou pull request, a pipeline irá rodar automaticamente e você poderá verificar os resultados diretamente na interface do GitHub.
Você também pode acessar os artefatos gerados, como vídeos e screenshots, na seção Artifacts.

#
# EN

Frontend and backend tests using Cypress as a testing framework and Github Actions as a pipeline structure

For the frontend, the website saucedemo.com was used and for the backend, the api jsonplaceholder.typecode.com.


![image](https://github.com/user-attachments/assets/ed9b6fee-9021-4b38-9ae3-d4dd0bb01cb7)


Figure 1 - Test structure tree with Cypress

Installation:
After git cloning the project, perform the following steps to successfully run the test:
1) First, you will need to clone the repository locally. Run the following command in the terminal or Git Bash:
git clone https://github.com/fellipemacena/Saucedemo_GitHubActions.git

2) Open VS Code, in the terminal type:
npm install

3) Open the Cypress interface to ensure that it is installed correctly
npm run cypress:open
Note: If Cypress does not open correctly, go to the terminal and type: npm install cypress --save-dev

4) Run the tests in headless mode
npm run cypress:run

5) Run only frontend tests
npm run test:frontend

6) Run only backend (API) tests
npm run test:backend

7) GitHub Actions pipeline:
If you want to check how continuous integration (CI) is configured in GitHub Actions, follow these steps:
Go to the Actions tab in the GitHub repository.
With each push or pull request, the pipeline will run automatically and you can check the results directly in the GitHub interface.
You can also access the generated artifacts, such as videos and screenshots, in the Artifacts section.

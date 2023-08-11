# Repositório Curso DevClub

<p>
  No ano de 2023 quando iniciei minha transição de carreira para a programação, iniciei no curso <a href="https://rodolfomori.com.br/devclub/"><b>DevClub</b></a>,
  onde foram propostos vários desafios e projetos que estarei listando aqui nesse repositório. Tenho como intuito registrar meu aprendizado ea evolução do meu conhecimento em
  desenvolvimento de softwate.
</p>

#### Tecnologias Utilizadas

<p div=auto>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="CSS"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript"/></code>
</p>
<br>

### Desafio CSS

<p>
Os desafios de CSS incluem o desenvolvimento de 3 projetos basico usando apenas HTML e CSS, nestes projetos entendi como é estruturado o HTML e como usamos o CSS para a estilização de seus componentes.
</p>

- <a href="https://github.com/dionialves/DevClub/tree/main/CSS%20-%20Desafio%2001">CSS - Desafio 01</a>
- <a href="https://github.com/dionialves/DevClub/tree/main/CSS%20-%20Desafio%2002">CSS - Desafio 02</a>
- <a href="https://github.com/dionialves/DevClub/tree/main/CSS%20-%20Desafio%2003">CSS - Desafio 03</a>

<p>No desafio 03 apliquei a responsividade, garantindo um layout correto para tela de computador, tablet e celular.</p>

### Desafio JS

<p>
Os desafio em JavaScript serão mostrados nessa sessão, pode ser que alguns desses projetos sejam separados em repositórios, devido a sua complexidade. Abaixo vou listar cada projeto com um breve resumo do mesmo.
</p>
<br/>

#### <a href="https://github.com/dionialves/currency-conversion">JS - Desafio 04 - Conversor de Moeda</a>

<p>
Neste projeto, criamos uma pequena aplicação com Java Script, para a conversão de moedas, apliquei conhecimentos como function, objetcs e a manipulação de elementos HTML via JavaScript.
</p>
<img src="https://github.com/dionialves/DevClub/blob/main/JS%20-%20Desafio%2004/img/project.png" width="500">
<br/>

#### <a href="https://github.com/dionialves/DevClub/tree/main/JS%20-%20Desafio%2005">JS - Desafio 05 - Sorteio de Numeros</a>

<p>
Para este projeto usei alguns recursos da biblioteca Math do JavaScript para formular um numero ramdomico e retornar ao cliente.
</p>
<img src="https://github.com/dionialves/DevClub/blob/main/JS%20-%20Desafio%2005/assets/project.png" width="500">
<br/>

#### <a href="https://github.com/dionialves/DevClub/tree/main/JS%20-%20Desafio%2006">JS - Desafio 06 - Pesquisa de Contato</a>

<p>
Nesta simples aplicação é composta de um input e um button, onde faço a pesquisa em uma lista de objects, e retorno uma mensagem na tela. Tive o cuidado
de fazer algumas verificações, como palavras com caixa alta e espaços em brancos no inicio da palavra e no final, coisas simples, mas que fazem todas a diferença.
</p>
<p>
Como toda boa linguagem de programação, o JavaScript possui boas opções de laços de repetição, neste projeto tive a oportunidade de testar vários
laços como, <b>For, For of, For in, while, do while</b> e <b>forEach</b>. Mas para esse projeto observei que a melhor opção seria o <b>for of</b>,
pois percoria facilmente uma lista contendo objects. 
</p>

<img src="https://github.com/dionialves/DevClub/blob/main/JS%20-%20Desafio%2006/assets/project.png">
<br/>

#### <a href="https://github.com/dionialves/jokenpo">JS - Desafio 07 - Jokenpô</a>

<p>
Este game simula o conhecido Jokenpô, ou como chamamos no Brasil o Pedra, Papel e Tesoura. Ampliei meus conhecimento na manipulação da DOM, fluxo de controle com IF e ELSE e FOR. Mas o principal ganho foi na refatoração do codigo, depois do projeto pronto e funcional começei a organizar o codigo, a trocar trechos longos de codigo por outros mais simples e com mesmo resultado, separei trechos longos e que realizavam várias tarefas por funções, com o intuito de deixar cada função fazendo apenas uma atividade.
</p>

<img src="https://github.com/dionialves/jokenpo/blob/main/assets/project.png"  width="500">
<br/>

#### <a href="https://github.com/dionialves/DevClub/tree/main/NODE%20-%20Desafio%2008">NODE - Desafio 08 - CRUD</a>

<p>
Neste projeto estou estudando sobre NODE, e fiquei surpreso de como gostei de trabalhar com o backend, acredito que irei direcionar minha carreira para trabalhar com o backend.
Neste desafio, comecei a trabalhar com o framework express e pude capturar informações no front-end e manipular uma varivel, que esta fazendo o papel do banco de dados. Com as 
operações de criar, ler, atualizar e deletar (CRUD), pude manipular essa variável. Para o front-end começei a utilizar o insomnia, que facilita muito o trabalho. Com este projeto
pude observar o poder que NODE + EXPRESS tem, e já pude imaginar aplicações mais complexas com essas ferramentas.
</p>

<img src="https://github.com/dionialves/DevClub/blob/main/NODE%20-%20Desafio%2008/project.png">
<br/>

#### <a href="https://github.com/dionialves/DevClub/tree/main/NODE%20-%20Desafio%2009">NODE - Desafio 09 - Hamburgueria</a>

<p>
Avançando nos estudos com NODE e do framework EXPRESS, criei uma nova aplicação para processar requisições dos pedidos dos cliente, claro, apenas o processamento das requisições
no back-end. Nesta aplicação temos as seguintes rotas:
</p>

- `POST /order`: Para criar um pedido, contendo nome do cliente, pedido e valor
- `GET /order`: Para retornar a lista dos pedidos
- `PUT /order/:id`: Para atualizar um pedido específico, levando como parametro o ID
- `DELETE /order/:id`: Deletar um pedido, levando como parametro o ID
- `GET /order/:id`: Mostrar um pedido específico
- `PATCH /order/:id`: Alterar o status de um pedido, de "Em preparação" para "Pronto"

<p>
Foi adicionado também duas middlewares, uma para validar se o ID passado existe e outro para imprimir no console a URL e o METHOD utilizado, claro essa ultima apenas para funs didáticos.
</p>


<img src="https://github.com/dionialves/DevClub/blob/main/NODE%20-%20Desafio%2009/project.png">
<br/>

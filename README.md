![enter image description here](https://i.imgur.com/9CLssES.png)

# Next Flix

### ⚠️Em desenvolvimento 


Este projeto tem por fim por em prática estudos sobre **JamStack** .

Tecnologias e recursos usados neste projeto:

 - **[Next JS](https://nextjs.org/)**: Oferece suporte para renderização híbrida, estática e de servidor.
 - **[Windi CSS](https://windicss.org/)**: alternativa **on demand**  ao Tailwind CSS.
 - **[TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)**: API de filmes, seriados, atores e imagens.

Veja uma demonstração em produção [aqui](https://next-flix-one.vercel.app/) 🙂

### Como rodar este projeto?

Para rodar este projeto é necessário ter instalado em sua máquina o **Node** e o **NPM**.

Faça o clone do repositório e rode o comando:

    npm install
    
Logo em seguida é necessário algumas configurações. Na raiz do projeto crie um  arquivo:

    .env.local
Dentro de **.env.local** adicione as seguintes chaves:

    TMDB_KEY=<Sua chave secreta da API TMDB>
    TMDB_BASE_URL=<URL base da api TMDB>
[Clique aqui](https://developers.themoviedb.org/3/getting-started/introduction) para criar uma chave.

Seu arquivo **.env.local** deverá se parecer com isso:

    TMDB_KEY=123456...
    TMDB_BASE_URL=https://api.themoviedb.org/3

Depois de configurado você poderá rodar o projeto com:

    npm run dev

   



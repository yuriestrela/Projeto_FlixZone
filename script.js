const API_KEY = '516bf8278e073fc16cddda40042438f1';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
};

const displayMovies = (movies) => {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = ''; 

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');


        //Imagem
        movieDiv.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`;
        movieDiv.style.backgroundSize = 'cover';
        movieDiv.style.backgroundPosition = 'center';
        movieDiv.style.height = '300px';
        movieDiv.style.position = "relative"

        //Titulo
        const title = document.createElement('p');
        title.textContent = movie.title;
        title.style.position = 'absolute';
        title.style.fontSize = "17px"
        title.style.bottom = '10px';
        title.style.left = '10px';
        title.style.color = 'white';
        title.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        title.style.padding = '5px';
        title.style.opacity = '0';
        title.style.transition = 'opacity 0.3s';

        // Adicionando eventos de mouse
        movieDiv.addEventListener('mouseover', () => {
            title.style.opacity = '1';
        });

        movieDiv.addEventListener('mouseout', () => {
            title.style.opacity = '0';
        });


        movieDiv.appendChild(title);
        moviesContainer.appendChild(movieDiv);

        
    });
};

fetchMovies();

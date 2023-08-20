import MoviesList from '../assets/mock-data/movieslist.json';
function Movies(){
    return(
        <div>
            {
                MoviesList.length<1?
                <div>Currently no movies review available</div>
                :MoviesList.map(m=>{
                    return(
                        <div key={m.id}>
                            {m.title},{m.rating},{m.reviews}
                        </div>
                    );
                })
            }
        </div>
    );  
}
export default Movies;
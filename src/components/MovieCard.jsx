import './movieCard.css'; 


const movies = [
  {
    title: "Kingsglaive",
    subtitle: "Final Fantasy XV",
    description:
      "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
    image:
      "https://cdn.moviefone.com/admin-uploads/posters/f1-movie-poster_1747060426.jpg?d=360x540&q=50",
    rating: 4.5,
  },
  {
    title: "Final Fantasy",
    subtitle: "Spirits Within",
    description:
      "A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",
    image:
      "https://image.tmdb.org/t/p/original/oumprkO9bThExP8NwxBIBnvBu2v.jpg",
    rating: 4.5,
  },
  {
    title: "Ghost In The Shell",
    subtitle: "Ghost In The Shell",
    description:
      "A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",
    image:
      "https://preview.redd.it/a-movie-you-love-that-bombed-at-the-box-office-v0-92pgdya9mk6f1.jpeg?width=1505&format=pjpg&auto=webp&s=f77f157aeef1c48dc36ed2de169305f4a15e1a46",
    rating: 5,
  },
];

function MovieCard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-sky-700">
        <h1 className="text-4xl font-bold text-center mb-8">
          React Movie Cards
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className=" card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <h3 className="text-gray-500">{movie.subtitle}</h3>
              <p className="mt-2 text-gray-700">{movie.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex text-yellow-400">
                  {"★".repeat(Math.floor(movie.rating))}
                  {"☆".repeat(5 - Math.floor(movie.rating))}
                   <span className=" pl-3 text-blue-500 font-bold">{movie.rating}</span>
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;

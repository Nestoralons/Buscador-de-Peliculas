export default function Poster({ Movies }) {
  return (
    <ul>
      {Movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.yitle}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

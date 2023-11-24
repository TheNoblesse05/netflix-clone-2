import { promises as fs } from 'fs';

export default async function FetchMovies() {
  const file = await fs.readFile(process.cwd() + '/movie_data/movies.json', 'utf8');
  const data = JSON.parse(file);
  return (data);
}
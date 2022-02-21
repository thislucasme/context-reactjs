import { useContext } from "react"
import { EpisodiosContext } from "../context/EpisodiosContext"

export const Info = () => {

	const episodios = useContext(EpisodiosContext);

	return (
		<>
			<h1>{episodios?.episode}</h1>
			<ul>
				{episodios?.characters.map(personagem => {
					return <li>{personagem}</li>
				})}
			</ul>
		</>
	);
}
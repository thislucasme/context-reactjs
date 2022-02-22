import { createContext, ReactNode, useEffect, useState } from 'react'
import { Episodio } from '../tipos/tipos';
import axios from 'axios';
export const EpisodiosContext = createContext<Episodio | null>(null);

interface EpisodiosProviderProps {
	children: ReactNode
}

//

export function EpisodiosProvider({ children }: EpisodiosProviderProps) {

	const [episodio, setEpisodio] = useState<Episodio | null>(null);

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/episode/28')
			.then(response => {
				setEpisodio(response.data)
			});
	}, []);

	return (
		<EpisodiosContext.Provider value={episodio}>
			{children}
		</EpisodiosContext.Provider>
	)
}
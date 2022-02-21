

# ReactJS Context

Em uma aplicação react como em várias outras tecnologias, os dados são passados de cima para baixo, ou seja; do componente pai para o componente filho. Por meio de props por exemplo a propriedade de um compoente (width). Com o contexto é possível compartilhar esses valores sem ter que passar explicitamente um prop por todos os níveis  da árvore de componentes.

## Contribuindo

Contribuições são sempre bem-vindas!

Veja `contribuindo.md` para saber como começar.



## Apêndice
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



## Referência

 - [Context](https://reactjs.org/docs/context.html)
## Etiquetas

Adicione etiquetas de algum lugar, como: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Autores

- [@thislucasme](https://www.github.com/thislucasme)


## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack...


## Uso/Exemplos

```javascript
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Episodio } from '../tipos/tipos';
import axios from 'axios';
export const EpisodiosContext = createContext<Episodio | null>(null);

interface EpisodiosProviderProps {
	children: ReactNode
}

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

import React from 'react'
import {render} from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'
import App from './componentes/App'

render( 
	<Provider store={store}>
	<div>
	<App />
	</div>
	</Provider>
	,
	document.getElementById('content')
	)




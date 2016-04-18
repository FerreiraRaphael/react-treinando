import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import ContainerTodosList from '../Containers/ContainerTodosList'
import TodosList from './TodosList'
import Input from './Input'
import Footer from './Footer'

const App = () => (
	<div>
	<Input />
	<ContainerTodosList />
	<Footer />
	</div>
	)

export default App
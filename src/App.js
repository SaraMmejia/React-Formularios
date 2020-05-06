import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
	state = {
		task: "",
		description: "",
		complete: false,
		lists: [],
	};

	handleChange = (e) => {
		const { name } = e.target;
		const value = name === "complete" ? e.target.checked : e.target.value;

		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const list = {
			task: this.state.task,
			description: this.state.description,
			complete: this.state.complete,
		};
		const lists = this.state.lists.concat(list);

		this.setState({
			lists,
			task: "",
			description: "",
			complete: false,
		});
	};

	render() {
		console.log(this.state.lists);
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="task">Nombre de la Tarea</label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.task}
						name="task"
						id="task"
					/>

					<label htmlFor="description">
						Escribe la descripción de la Tarea
					</label>
					<textarea
						type="text"
						onChange={this.handleChange}
						value={this.state.description}
						name="description"
						id="description"
					></textarea>
					<label htmlFor="complete">
						Selecciona cuando hayas finalizado la Tarea
					</label>
					<input
						type="checkbox"
						onChange={this.handleChange}
						checked={this.state.complete}
						name="complete"
						id="complete"
					/>
					<button type="submit">Enviar</button>
				</form>
			</div>
		);
	}
}

export default App;

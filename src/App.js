import React from "react";
import uuid from "uuid-random";
import "./App.css";

function RenderList({ lists }) {
	return lists.map((el) => {
		return (
			<div className="list" key={el.id}>
				<h2>
					{el.task} {el.description}
				</h2>
				<p>
					{el.complete} === true ? "Tarea Completada" : "Tarea por Completar"
				</p>
			</div>
		);
	});
}

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

		const { task, description, complete } = this.state;
		const list = { id: uuid, task, description, complete };
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
				<RenderList users={this.state.lists} />
			</div>
		);
	}
}

export default App;

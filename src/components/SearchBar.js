import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = (event) => {
		this.setState({ term: event.target.value.toUpperCase() });
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		// passing the search query to App.js via callback function, climbing up the ladder with the data
		this.props.getSubmitQuery(this.state.term);
	};

	render() {
		return (
			<div className="ui segment ">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="two field">
						<input
							type="text"
							placeholder="Search Images"
							name="searchBox"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;

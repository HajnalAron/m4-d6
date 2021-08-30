import React from "react";
import SingleBook from "./SingleBook";
import { Col, Row } from "react-bootstrap";
import category from "../data/fantasy.json";
class BookList extends React.Component {
	state = {
		selected: false,
	};
	render() {
		return (
			<Row key={category.category}>
				<Col xs="12">
					<h1>{category.category}</h1>
				</Col>
				{category.map((book) => (
					<SingleBook key={book.asin}
						setSelected={(asin) => {
							this.setState({ selected: asin });
							console.log({ book });
						}}
						selected={this.state.selected}
						book={book}
					/>
				))}
			</Row>
		);
	}
}

export default BookList;

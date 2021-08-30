import { Component } from "react";
import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";
import CommentList from './CommentList';
import AddComment from './AddComment';

class SingleBook extends Component {
	render() {
		return (
			<Col
				onClick={() => this.props.setSelected(this.props.book.asin)}
				xs="3 mb-3"
				key={this.props.book.asin}
				className={
					this.props.selected === this.props.book.asin ? "bg-dark" : ""
				}
			>
				<Card className="h-100">
					<Card.Img variant="top" src={this.props.book.img} />
					<Card.Body>
						<Card.Title>{this.props.book.title}</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>{this.props.book.category}</ListGroupItem>
						<ListGroupItem>{this.props.book.price}$</ListGroupItem>
						<ListGroupItem>
							{this.props.book.asin}

							{/* {this.props.selected === this.props.book.asin ? "selected" : ""} */}
						</ListGroupItem>
						<AddComment asin={this.props.book.asin}/>
						<ListGroupItem>
							{this.props.selected === this.props.book.asin ? <CommentList asin={this.props.book.asin}/>: <ListGroupItem>Click on the card to see comments!</ListGroupItem>}
						</ListGroupItem>
					</ListGroup>
				</Card>
			</Col>
		);
	}
}

export default SingleBook;
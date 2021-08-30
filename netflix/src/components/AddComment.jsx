import React from "react";
import {Form, Button} from "react-bootstrap"

class AddComment extends React.Component {
    state = {
        isLoading:false,
        comment: {
            comment: '',
            rate: 1,
            elementId:this.props.imdbID
        }
    }
    createComment = async (event) => {
        event.preventDefault()
        try {
            let resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,{
                    method:"POST",
                    body:JSON.stringify(this.state.comment),
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjY5MTJkNTI2MjAwMTViNmRjOTciLCJpYXQiOjE2Mjk5ODMwMjMsImV4cCI6MTYzMTE5MjYyM30.kZueZZ8UW_1TIU6mPpYYQkcIQ8RyOTIBddtspnqXlsQ"
                    }
                })
                if (resp.ok) {
                    let deleteResponse = await resp.json()
                    console.log(deleteResponse)
                    this.props.setLoadingState(true)
                } 
            }
            catch(error) {
                console.log(error)
            }
    }
    render () {
        return(
            <Form key={this.props.imdbID}>
                <Form.Group className="mb-3" >
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Add comment here"
                            value={this.state.comment.comment}
                            onChange={(event) => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    comment: event.target.value
                                }
                            })}
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                            type="number"
                            value={this.state.comment.rate}
                            onChange={(event) => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    rate: event.target.value
                                }
                            })}
                        />
                </Form.Group>
                <Button onClick={(event)=>this.createComment(event)} variant="primary" type="submit">
                    Add Comment
                </Button>
            </Form>
        )
    }
}

export default AddComment
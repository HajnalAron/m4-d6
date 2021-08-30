import { Component } from "react";
import { ListGroup, Spinner, Button } from "react-bootstrap" 

class  CommentList extends Component {
    state = {
        comments:[],
        isLoading:true,
    }

    deleteComment = async (id) => {
        try {
            let resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`,{
                    method:"DELETE",
                    headers:{
                        "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjY5MTJkNTI2MjAwMTViNmRjOTciLCJpYXQiOjE2Mjk5ODMwMjMsImV4cCI6MTYzMTE5MjYyM30.kZueZZ8UW_1TIU6mPpYYQkcIQ8RyOTIBddtspnqXlsQ"
                    }
                })
                if (resp.ok) {
                    let deleteResponse = await resp.json()
                    console.log(deleteResponse)
                } 
            }
            catch(error) {
                console.log(error)
            }
    }
    
    getComments = async () => {
        if (this.state.isLoading) {
        try {
        let resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,{
                method:"GET",
                headers:{
                    "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjY5MTJkNTI2MjAwMTViNmRjOTciLCJpYXQiOjE2Mjk5ODMwMjMsImV4cCI6MTYzMTE5MjYyM30.kZueZZ8UW_1TIU6mPpYYQkcIQ8RyOTIBddtspnqXlsQ"
                }
            })
            if (resp.ok) {
                let comments = await resp.json()
                console.log(comments)
                this.setState({
                    comments:comments,
                    isLoading:false,
                })
            } 
        }
        catch(error) {
            console.log(error)
        } 
    }
    }
    componentDidMount () {
        this.getComments()
    }
    render () {
        console.log("render")
        return(
        <ListGroup key={this.props.asin}>
        {
        this.state.isLoading?(
        <Spinner className={"mx-auto"} animation="border" variant="dark"/>
        )
        :
        (this.state.comments.length)?(this.state.comments.map(comment => {return(<ListGroup>
        <ListGroup.Item key={comment._id}>{comment.rate}/5, {comment.comment} 
        by: <ListGroup.Item>{comment.author}</ListGroup.Item> </ListGroup.Item>
        <Button onClick={() => this.deleteComment(comment._id)} className={"btn btn-danger"}>Delete Comment</Button></ListGroup>
        )}))
        :
        (<ListGroup.Item>This book has no comments!</ListGroup.Item>)
        }    
        </ListGroup>
        )
    }
}

export default CommentList 
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { Component } from "react";

class Comments extends Component {
    state ={
        isLoading:true,
    }
    loadingState = (stateOfLoading) => {
        this.setState({
            isLoading:stateOfLoading,
        })
    }
    render () {
            return(
            <>
            <CommentList isLoading={this.state.isLoading} imdbID={this.props.imdbID}/>
            <AddComment setLoadingState={() => this.loadingState()} imdbID={this.props.imdbID}/>
            </>
        )
    }
}

export default Comments
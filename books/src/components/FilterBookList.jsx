import { Component } from 'react';
import BookList from './BookList'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import scifi from '../data/scifi.json';
import romance from '../data/romance.json';
import horror from '../data/horror.json';

class FilterBookList extends Component{
    state = { search:"",
            categories:[fantasy, history, romance, scifi, horror,] ,
            filteredBooks:[fantasy, history, romance, scifi, horror,],       
      }
    search(e) {
        this.setState({
            categories:[fantasy, history, romance, scifi, horror,],
            search: e.target.value,
            filteredBooks:this.state.categories.map(category=> category.filter(book => book.title.toLowerCase().includes(this.state.search.toLowerCase())))
        })   
    }
    
    render(){
        return(
            <>
            <input type="text" onKeyUp={(e)=>{this.search(e)}}/>
            {this.state.filteredBooks.map(category=>{return(<BookList key={category[0].category} category={category}/>)})}
            </>   
        )
    }
}

export default FilterBookList
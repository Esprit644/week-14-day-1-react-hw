import React, {Component} from 'react'

class FilmDetail extends Component{
    render(){
        //return <h1>Film Detail</h1>
        return (
            <div className="film">
              <h4> {this.props.id}</h4>
              
               <a href = {this.props.url}><li>{this.props.name}</li></a>
            </div>
          );
    }



}

export default FilmDetail
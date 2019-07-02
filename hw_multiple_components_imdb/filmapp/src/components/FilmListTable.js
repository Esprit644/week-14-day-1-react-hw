import React, {Component, Fragment} from 'react'
import FilmDetail from './FilmDetail'
import FilmContainer from '../containers/FilmContainer';

class FilmListTable extends Component{

    render(){

        //return <FilmDetail/>
        const filmComponents = this.props.films.map((filmData) => {
            return (
              <FilmDetail
                name={filmData.name}
                key={filmData.id}
                url={filmData.url}
              >
                
              </FilmDetail>
            )
          })
      
          return (
            <Fragment>
              {filmComponents}
            </Fragment>
          )
    }


}

export default FilmListTable
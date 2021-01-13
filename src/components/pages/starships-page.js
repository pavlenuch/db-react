import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../../row';
import { withRouter } from 'react-router-dom';

class StarshipsPage extends Component {
    render() {
        const { history } = this.props;
        
        return (
            <StarshipList 
                onItemSelected={(itemId)=>{
                    history.push(`/starships/${itemId}`)
            }}/> 
        )
    }
}

export default withRouter(StarshipsPage)
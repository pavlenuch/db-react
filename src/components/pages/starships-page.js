import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../../row';
import { withRouter } from 'react-router-dom';

class StarshipsPage extends Component {
    // state = {
    //     selectedItem: null
    // };

    // onItemSelected = (selectedItem) => {
    //     this.setState({selectedItem});
    // }

    render() {

        // const { selectedItem } = this.state;
        const { history } = this.props;
        
        return (
            <StarshipList 
                onItemSelected={(itemId)=>{
                    history.push(`/starships/${itemId}`)
            }}/> 
            // <Row 
            //   left={ <StarshipList onItemSelected={this.onItemSelected}/> } 
            //   right={ <StarshipDetails itemId={selectedItem} /> }
            // />
        )
    }
}

export default withRouter(StarshipsPage)
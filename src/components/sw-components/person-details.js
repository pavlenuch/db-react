import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
// import { SwapiServiceConsumer } from '../swapi-service-context'; 
import { withSwapiService } from '../hoc-helper';
// import SwapiService from '../../services/swapi-service';

const PersonDetails = ( props ) => {
    // const { getPerson, getPersonImage} = swapiService;
    return (
                        <ItemDetails {...props}>
                            <Record field="gender" label='Gender' />
                            <Record field="eyeColor" label='Eye Color' />
                        </ItemDetails>
    )

};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(mapMethodToProps)(PersonDetails)
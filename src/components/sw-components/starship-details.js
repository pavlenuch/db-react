import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
// import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc-helper';

const StarshipDetails = ( props ) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label='Model' />
            <Record field="length" label='Length' />
            <Record field="costInCredits" label='Cost' />
        </ItemDetails>
    )
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(mapMethodToProps)(StarshipDetails)
// export default StarshipDetails;
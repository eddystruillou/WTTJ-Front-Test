import React from 'react';
import './JobItem.css';
import { Text } from '@welcome-ui/text';
import { Button } from '@welcome-ui/button';

const JobItem = () => {
  return (
    <div className="jobItem">
        <Text variant="subtitle1">Intitulé du Poste</Text>
        <Text variant="subtitle2">Type de contrat</Text>
        <Text variant="subtitle2">Localisation</Text>
        <Button variant="tertiary" size='sm'>Show More</Button>
    </div>
  )
}

export default JobItem;
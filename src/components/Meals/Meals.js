import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import Available from './Available';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Available />
    </Fragment>
  );
};

export default Meals;
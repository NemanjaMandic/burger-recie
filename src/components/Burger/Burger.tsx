import React, {FunctionComponent} from 'react';
import {StyledBurger} from './Burger.styled';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export interface BurgerProps {
    
}
 
const Burger: FunctionComponent = () => {
    return ( 
        <StyledBurger>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </StyledBurger>
     );
}
 
export default Burger;
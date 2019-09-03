import React, {PureComponent} from 'react';
import { Burger } from '../../components/Burger';
export default class BurgerBuilder extends PureComponent {
    render(){
        return(
            <>
            <Burger />
            <div>Kurac</div>
            <div>Palac</div>
            </>
           
        )
    }
}
import React, {useState} from "react";
import {CurrencyType} from "./App";
import {CustomButton} from "./CustomButton";

type CurrencyFilterType = {
    state: Array<CurrencyType>
}

export const CurrencyFilter: React.FC<CurrencyFilterType> = ({state}) => {

    const [filter, useFilter] = useState('rubles')


    let filteredState = state.filter((currency: CurrencyType) => currency.banknote === filter)


    let mappedFilteredState = filteredState.map((currencyEl: CurrencyType, index) => <div
        key={index}>{currencyEl.banknote}</div>)

    const useSetFilter = () => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
         if(filter === 'rubles'){useFilter('dollar')}
         // eslint-disable-next-line react-hooks/rules-of-hooks
        else if (filter === 'dollar'){useFilter('yani')}
         // eslint-disable-next-line react-hooks/rules-of-hooks
        else if(filter === 'yani'){useFilter('rubles')}
        else {return true}

    }

    return (
        <div>
            <div>{mappedFilteredState}</div>
            <CustomButton currency={filter}
                          callBackButton={useSetFilter}/>
        </div>
    )
}



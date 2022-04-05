import React, {useState} from "react";
import {CurrencyType} from "./App";
import {CustomButton} from "./CustomButton";

type CurrencyFilterType = {
    state: Array<CurrencyType>
}

export const CurrencyFilter: React.FC<CurrencyFilterType> = ({state}) => {



    let banknotes = state.map((el: CurrencyType) => el.banknote)

    let banknotesFiltered = banknotes.reduce((acc: string[], el: string) =>
        acc.includes(el) ? [...acc] : [...acc, el], [] as Array<string>)

    const [filter, useFilter] = useState('all')
    let [count,useCount]= useState(0)

    let useOnChangeFilter = () => {
        debugger
        useFilter(banknotesFiltered[count])
        useCount(count=count+1)

        if(banknotesFiltered.length<count){
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useCount(0)
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useFilter('all')

        }else {

            }





    }


    let filteredState = state.filter((currency: CurrencyType) =>
        filter === 'all' ? true : currency.banknote === filter)


    let mappedFilteredState = filteredState.map((currencyEl: CurrencyType, index) => <div
        key={index}>{currencyEl.banknote} {currencyEl.nominal}</div>)
    //переменная с итерацией по объекту State в качестве значения


    return (
        <div>
            <div>{mappedFilteredState}</div>

            <CustomButton currency={filter}
                          callBackButton={useOnChangeFilter}
            />

        </div>
    )
}



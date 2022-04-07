import React, {useState} from "react";
import {CurrencyType} from "./App";
import {CustomButton} from "./CustomButton";

type CurrencyFilterType = {
    state: Array<CurrencyType>
}

export const CurrencyFilter: React.FC<CurrencyFilterType> = ({state}) => {

    let banknotes = state.map((el: CurrencyType) => el.banknote)
    //эта штука создает массив названий валют

    let banknotesFiltered = banknotes.reduce((acc: string[], el: string) =>
        acc.includes(el) ? [...acc] : [...acc, el], ['all'] as Array<string>)
    //эта штука создает массив названий валют, по одному элементу для каждой валюты
    // для дальнейшего использования его при фильтрации стейта

    const [filter, useFilter] = useState('all')
    //этот хук хранит в себе режимы фильтрации в виде строк

    let [count,useCount]= useState(1)
    // это счетчик который нужен для переключения режимов фильтра при нажатии кнопки


    let useOnChangeFilter = () => {
        let index= count % banknotesFiltered.length
        //эта очень полезная штука которая зацикливает счетчик так, чтобы он
        //обнулялся при достижении конечного индекса в массиве названий валют для фильтра
        useCount(count=count+1)
        //тут все понятно
        useFilter(banknotesFiltered[index])
        //тут сохраняется название валюты в хуке хранения режимов фильтрации
    }
    // это типа кастомный хук который срабатывает при нажатии на кнопку


    let filteredState = state.filter((currency: CurrencyType) =>
         filter==='all'? true : currency.banknote === filter)
    //здесь фильтруется стейт в зависимости от сохраненного значения в хуке с режимом фильтрации

    let mappedFilteredState = filteredState.map((currencyEl: CurrencyType, index) => <div
        key={index}>{currencyEl.banknote} {currencyEl.nominal}</div>)
    //эта штука ссылается на проитерированый и отфильтрованый стейт который отрисовывается ниже


    return (
        <div>
            <div>{mappedFilteredState}</div>

            <CustomButton currency={filter}
                          callBackButton={useOnChangeFilter}
            />

        </div>
    )
}



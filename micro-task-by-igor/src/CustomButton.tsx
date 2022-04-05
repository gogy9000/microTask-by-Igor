import React, {Dispatch, SetStateAction, useState} from "react";

type CustomButtonPropsType = {
    currency: string
    callBackButton: ()=>void
}
export const CustomButton: React.FC<CustomButtonPropsType> = ({currency, callBackButton}) => {
    const [color, useColor] = useState('gray')

    const setCurrency = () => {
        callBackButton()

    }

    return (
        <div>
            <button style={{backgroundColor: `${color}`}}
                    onClick={setCurrency}>{currency}
            </button>
        </div>
    )
}
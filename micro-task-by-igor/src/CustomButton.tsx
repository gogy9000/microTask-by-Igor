import React, {useState} from "react";

type CustomButtonPropsType = {
    currency: string
    callBackButton: () => true|undefined
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
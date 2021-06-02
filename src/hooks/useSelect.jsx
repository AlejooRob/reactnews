import React, { useState } from 'react'

const useSelect = (stateInicial, options) => {

    //state from custom hook
    const [state, updateState] = useState(stateInicial);
    const selectNoticias = () =>(
        <select 
        className="browser-default"
        value={state}
        onChange={e => updateState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
    return [state, selectNoticias];
}
 
export default useSelect;
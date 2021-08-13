import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { stylesColor } from '../../global.style'

export default function List(){

    // get data from Redux
    const list = useSelector(state => state.add.data)

    // dispath action to Redux
    const dispatch = useDispatch()

    const action = (item) => {
        dispatch({
            type: 'ADD',
            data: item
        })
    }

    // handle
    const handleAdd = (item) => {

        action(item)
    }

    return(
        <>
            <ul>
                { list.map((item, index) => (
                    <li key={index} style={{color: stylesColor.primary}}>{item}</li>
                ))}
            </ul>
            <button onClick={() => handleAdd('new item')}>
                Add
            </button>
        </>
    )
}
import React from 'react'
import style from './UI_display.module.css'
export default function Ul_display(props) {
    let {data} = props;
    const numbers = [1, 2, 3, 4, 5];

  return (
    <ul className={style.ul} >
        {data.map((e,i)=><li key={numbers[i]+' '}>{e}</li>)}
    </ul>
  )
}

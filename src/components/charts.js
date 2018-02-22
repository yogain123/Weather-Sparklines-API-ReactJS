import React from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines'


export function Charts(props){

  return(
    <td>
        <Sparklines height={90} width={90} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
    </Sparklines>
  </td>
);

}

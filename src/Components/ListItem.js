import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BuySell from './BuySell'
import NavigationIcon from '@mui/icons-material/Navigation';

const ListItem = (props) => {
    const [showBtn,toggleShowBtn] = useState(false);
    const colour = props.increase ? '#5CA818' : '#D8601D';
  return (
    <ListStyle >
        <div onClick={()=>toggleShowBtn(!showBtn)}>
        <div className="up" style={{color:colour}}>
        <div>{props.title}</div>
        <div>{props.value}</div>
        </div>
        <div className="down" style={{color:'#7C9AA2'}}>
            <div>{props.subtitle}</div>
            <div>{props.change}({props.percent})%</div>
            {props.increase ? <NavigationIcon style={{color:colour}}/>:<NavigationIcon style={{color:colour,transform:'rotate(180deg)'}} />}
        </div>
        </div>
      {showBtn && <BuySell use="SELL"/>}
    </ListStyle>
  )
}

ListItem.propTypes = {
    increase: PropTypes.bool,
    title:PropTypes.string,
    subtitle:PropTypes.string,
    value: PropTypes.number,
    change: PropTypes.number,
    percent: PropTypes.number
}
const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  border-bottom: 2px solid #dedee3;
  background:var(--list-item-background);
  &:hover{
    cursor: pointer;
  }
    .up,.down{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding:1px 5px;
    }
`
export default ListItem

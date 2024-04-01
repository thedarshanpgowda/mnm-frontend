import React from 'react'
import styles from 'styled-components'

const ChartUI = styles.div`
    border-radius : 15px;
    overflow : hidden;
`

export default function Chart(props) {
  return (
    <ChartUI className = {props.className}>
      {props.children}
    </ChartUI>
  )
}

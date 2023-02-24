import { Dropdown, message } from 'antd'
import React from 'react'

const handleButtonClick = (e) => {
  message.info('Click on left button.')
  console.log(e.key);
  // console.log('click left button', e)
}
const handleMenuClick = (e) => {
  console.log(e.key);
}
const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
  {
    label: '4rd menu item',
    key: '4',
  },
]
const menuProps = {
  items,
  onClick: handleMenuClick,
}

const FilterDropDown = () => {
  return (
    <Dropdown.Button
      menu={menuProps}
      onClick={handleButtonClick}
      placement={'bottomRight'}
    >
      Фильтры
    </Dropdown.Button>
  )
}

export { FilterDropDown }

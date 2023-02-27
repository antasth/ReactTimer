import { Dropdown, message } from 'antd'
import { filters } from '../../../config';
import styles from './FilterDropDown.module.scss';

const FilterDropDown = () => {

  const handleButtonClick = (e) => {
    message.info('Click on left button.')
    console.log(e.key);
  }
  const handleMenuClick = (e) => {
    console.log(e.key);
  }

  const items = filters.map((filter, index) => {
   return {label: filter, key: index}
  })

  const menuProps = {
    items,
    onClick: handleMenuClick,
  }
  return (
    <Dropdown.Button
      menu={menuProps}
      onClick={handleButtonClick}
      placement={'bottomRight'}
      className={styles.dropdown}
    >
      Фильтры
    </Dropdown.Button>
  )
}

export { FilterDropDown }

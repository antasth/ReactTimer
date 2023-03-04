import { Select } from 'antd'
import { useContext } from 'react'
import { SortContext } from '../../../context/SortContext'
import styles from './SortProducts.module.scss'

const SortProducts = () => {
  const sort = useContext(SortContext)

  const handleChange = (value) => {
    sort.setSortParam(value)
  }

  return (
    <div className={styles.sort}>
      <span className={styles.title}>Сортировка:</span>
      <Select
        defaultValue="default"
        dropdownMatchSelectWidth={false}
        bordered={false}
        onChange={handleChange}
        options={[
          {
            value: 'default',
            label: 'По умолчанию',
          },
          {
            value: 'popularity',
            label: 'По популярности',
          },
          {
            value: 'price',
            label: 'По цене',
          },
          {
            value: 'name',
            label: 'По названию',
          },
        ]}
      />
    </div>
  )
}

export { SortProducts }

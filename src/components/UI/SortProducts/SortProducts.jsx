import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import { setSort } from '../../../redux/slices/filterSlice'
import styles from './SortProducts.module.scss'

const SortProducts = () => {
  const dispatch = useDispatch()

  const handleChange = (value) => {
    dispatch(
      setSort({
        value: value.split('_')[0],
        option: value.split('_')[1],
      })
    )
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
            value: 'rating',
            label: 'По популярности',
          },
          {
            value: 'price_low',
            label: 'По цене ↑',
          },
          {
            value: 'price_high',
            label: 'По цене ↓',
          },
          {
            value: 'brand_low',
            label: 'По названию',
          },
        ]}
      />
    </div>
  )
}

export { SortProducts }

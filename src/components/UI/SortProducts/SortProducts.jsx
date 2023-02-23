import { Select } from 'antd'
import styles from './SortProducts.module.scss'

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const SortProducts = () => {
  return (
    <div className={styles.sort}>
      <span>Сортировка:</span>
      <Select
        defaultValue="default"
        dropdownMatchSelectWidth={false}
        bordered={false}
        // onChange={handleChange}
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

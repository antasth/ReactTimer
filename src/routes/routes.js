import { Cart } from '../pages/Cart'
import { Main } from '../pages/Main'
import { NotFound } from '../pages/NotFound'

export const publicRoutes = [
  { id: 1, path: '/', component: <Main />, exact: true },
  { id: 2, path: '/cart', component: <Cart />, exact: true },
  { id: 3, path: '*', component: <NotFound />, exact: true },
]

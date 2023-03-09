import { Cart } from '../pages/Cart/Cart'
import { Main } from '../pages/Main/Main'
import { NotFound } from '../pages/NotFound/NotFound'

export const publicRoutes = [
  { id: 1, path: '/ReactTimer', component: <Main />, exact: true },
  { id: 2, path: '/cart', component: <Cart />, exact: true },
  { id: 3, path: '*', component: <NotFound />, exact: true },
]

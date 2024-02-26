import Home from '../pages/home/Home'

type PUBLIC_ROUTES = {
  path: string
  component: React.FC
}

export const publicRoutes: PUBLIC_ROUTES[] = [{ path: '', component: Home }]

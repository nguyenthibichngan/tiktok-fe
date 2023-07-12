import toutesConfig from '~/config/routes'

//Layouts
import { HeaderOnly } from '~/components/Layout'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

const publicRoutes = [
    { path: toutesConfig.home, component: Home },
    { path: toutesConfig.following, component: Following },
    { path: toutesConfig.profile, component: Profile },
    { path: toutesConfig.upload, component: Upload, layout: HeaderOnly },
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }
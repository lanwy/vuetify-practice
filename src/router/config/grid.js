import Grids from '@/pages/demo/grids/Grids'
import layout from '@/pages/demo/grids/layout'
import offset from '@/pages/demo/grids/offset'
import order from '@/pages/demo/grids/order'
import align from '@/pages/demo/grids/align'
import gridlist from '@/pages/demo/grids/gridlist'
import growshark from '@/pages/demo/grids/growshark'
import nest from '@/pages/demo/grids/nest'
import custom from '@/pages/demo/grids/custom'
import spacer from '@/pages/demo/grids/spacer'
import tag from '@/pages/demo/grids/tag'
import display from '@/pages/demo/grids/display'

export default [
    { path:'/demo/grids/grids', name:'grids', component:Grids },
    { path:'/demo/grids/layout', name:'layout', component:layout },
    { path:'/demo/grids/offset', name:'offset', component:offset },
    { path:'/demo/grids/order', name:'order', component:order },
    { path:'/demo/grids/align', name:'align', component:align },
    { path:'/demo/grids/gridlist', name:'gridlist', component:gridlist },
    { path:'/demo/grids/growshark', name:'growshark', component:growshark },
    { path:'/demo/grids/nest', name:'nest', component:nest },
    { path:'/demo/grids/custom', name:'custom', component:custom },
    { path:'/demo/grids/spacer', name:'spacer', component:spacer },
    { path:'/demo/grids/tag', name:'tag', component:tag },
    { path:'/demo/grids/display', name:'display', component:display },
]
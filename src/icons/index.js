import SvgIcon from '@/components/SvgIcon/index.vue'// svg component

const context = require.context('./svg', false, /\.svg$/)
const requireAll = (context) => context.keys().map(context)
requireAll(context)

export default function install(app) {
  app.component('svg-icon', SvgIcon)
}

import './app.css'

const r = require.context('./tests/', true, /\.js$/)
r.keys().forEach(r)

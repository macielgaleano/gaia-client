import React from "react"
import { Provider } from "react-redux"
import { store, persistor } from "../Redux/configurationStore"
import { PersistGate } from "redux-persist/integration/react"
// import { BrowserRouter as Router, Switch } from "react-router-dom"
// import PublicRoute from "../components/Routers/PublicRoute"
// import Home from "../components/home/Home"
// import Product from "../components/product/Product"

const IndexPage = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
  </Provider>
)

export default IndexPage

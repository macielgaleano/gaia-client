const fetch = require("fetch-node")
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const data = [
    {
      name: jose,
    },
  ]
  data.map(product => {
    createPage({
      path: `/producto/${product.name}`,
      component: require.resolve(`./src/components/product/Product.jsx`),
      context: { product },
    })
  })
}

//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm fuzzy socks',
    image: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    onSale: false,
    sizes: ["38-39", "40-41", "42-43"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
      }, {
        variantId: 2235,
        variantColor: "blue",
        variantImage: 'https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0',
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() { 
      this.cart += 1 
    },
    removeFromCart() { 
      this.cart -= 1 
    },
    updateProduct(variantImage) { 
      this.image = variantImage
    }
  }
})

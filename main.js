Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', {

  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      description: "A pair of warm fuzzy socks",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      onSale: false,
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0",
          variantQuantity: 7,
          variantCart: 0
        }, {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0",
          variantQuantity: 2,
          variantCart: 0
        }
      ]
    }
  },
  methods: {
    updateProduct(index) {
      this.selectedVariant = index
    },
    addToCart() {
      this.variants[this.selectedVariant].variantCart += 1
    },
    removeFromCart() {
      this.variants[this.selectedVariant].variantCart -= 1
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    cart() {
      return this.variants[this.selectedVariant].variantCart
    },
    quantityAvailable() {
      return this.variants[this.selectedVariant].variantQuantity - this.variants[this.selectedVariant].variantCart
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!'
      }
      return this.brand + ' ' + this.product + ' are not on sale.'
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
        return 2.99
    }
  },
  template: `
    <div class="product">
      
      <div class="product-image">
        <img :src="image" />
      </div>
      
      <div class="product-info">

        <!-- Titre, description et caractéristiques -->
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <product-details :details="details"></product-details>

        <!-- Variantes -->
        <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)">
        </div>

        <!-- Quantités -->
        <p v-if="quantityAvailable > 10">In stock</p>
        <p v-else-if="quantityAvailable > 0">Almost sold out!</p>
        <p v-else :class="{ outOfStock: !quantityAvailable }">Out of stock</p>

        <p>Shipping: {{ shipping }}</p>

        <!-- Promotion -->
        <span v-show="onSale">{{ sale }}</span>

        <!-- Ajout panier -->
        <button v-on:click="addToCart" :disabled="!quantityAvailable" :class="{ disabledButton: !quantityAvailable }">
          Add to Cart
        </button>

        <!-- Suppr panier -->
        <button v-on:click="removeFromCart" :disabled="!cart" :class="{ disabledButton: !cart }">
          Remove from Cart
        </button>

        <!-- Panier -->
        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>

      </div>
    </div>
  `
})

var app = new Vue({
  el: "#app",
  data: {
    premium: true
  }
})

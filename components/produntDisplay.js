app.component('product-display',{
    props:{
        premium:{
            type:Boolean,
            required:true,
        },
    },
    template: 
        /*html*/
        `<div class='product'>
            <h1 v-if='shrink'>{{product1}}</h1>
            <h1 v-else>{{product2}}</h1>
            <div class='price'>
                $: {{price}}
            </div>
            <button @click='addToCart' class='button' :class='{disableButton:!inStock}' :disabled='!inStock'>
                Add to Cart
            </button>
            <li v-for='detail in details'>{{detail}}</li>
            <div class='pics' v-for='(variant,index) in variants' :key='variant.id' :style='{backgroundColor:variant.color}'
                @mouseover='updateVariant(index)' @mouseout='updateVariant(999)'> 
            </div>
            <div class="product-image">
                <img class="bgpic" :src="image">
            </div>
            <review-list v-if='reviews.length' :reviews='reviews'></review-list>
            <review-form @review-submitted='addReview'></review-form>
        </div>`,
    data() {
        return {
            shrink:true,
            product1: 'beautiful',
            product2: 'girls',
            details: ['jiushi', 'yangchen', 'luxuan'],
            variants: [
                { id: 2233, posture: 'sit', color: 'yellow', image: './assets/images/01.jpg', quantity:50},
                { id: 2333, posture: 'kneel', color: 'red', image: './assets/images/02.jpg',quantity:0 },
            ],
            selectedVariant:999,
            reviews:[],
        }
    },
    methods: {
        addToCart() {
            if (this.selectedVariant==999) {
                this.$emit('add-to-cart','404 Not Found')
                return
            }
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
        },
        updateVariant(index){
            this.selectedVariant=index;
            console.log('update', this.image);
        },
        addReview(review){
            this.reviews.push(review)
            console.log(this.reviews.length)
        }
    },
    computed:{
        image(){
            if (this.selectedVariant==999) {
                return './assets/images/xp.jpg'
            }
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            if (this.selectedVariant==999) {
                return 999
            }
            return this.variants[this.selectedVariant].quantity
        },
        price(){
            if (this.premium) {
                return 'free'
            }
            return 999.99
        }
    },
    mounted() {
        setInterval(() => {
            this.shrink = !this.shrink
        }, 2000)
    },
})
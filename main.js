const app = Vue.createApp({
    data() {
        return {
            product1:'beautiful',
            product2:'girls',
            cart:0,
            // image1:'./assets/images/01.jpg',
            // image2:'./assets/images/02.jpg',
            orimage:'./assets/images/xp.jpg',
            image:'./assets/images/xp.jpg',
            inStock:true,
            details:['jiushi','yangchen','luxuan'],
            variants:[
                {id:2233,posture:'sit',image:'./assets/images/01.jpg'},
                {id:2333,posture:'kneel',image:'./assets/images/02.jpg'}
            ],
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        },
        updateImage(cimage){
            this.image=cimage
            console.log('update',this.image);
        }
    },
    mounted() {
        setInterval(()=>{
            this.inStock=!this.inStock
            // this.cart++
        },2000)
    },
}).mount('#app')
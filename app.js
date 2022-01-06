const app = Vue.createApp({
    data() {
        return {
            counterPic: 0,
            imageChest: "https://www.tiktok.com/api/img/?itemId=7047621592167222533&location=0&aid=1988",
            imageAlt: "https://i.pinimg.com/originals/1d/df/99/1ddf995353ccee453821296c7be3cfa2.jpg",
            
            
        };
    },

    methods: {

        changeImage:function() {
            
            this.imageChest = "https://i.pinimg.com/originals/1d/df/99/1ddf995353ccee453821296c7be3cfa2.jpg";
            this.imageAlt = "https://www.tiktok.com/api/img/?itemId=7047621592167222533&location=0&aid=1988";
          
            
            
            }
    }

    

});



app.mount("#assignment");


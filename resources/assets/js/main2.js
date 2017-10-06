Vue.component('modal', {
    template: `<div class="modal">
                  <div class="modal-background"></div>
                  <div class="modal-card">
                    <header class="modal-card-head">
                      <p class="modal-card-title">
                        <slot name="header"></slot>
                      </p>
                      <button class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        <slot></slot>
                    </section>
                    <footer class="modal-card-foot">
                      <slot name="footer">
                        <button class="button is-success">OK</button>
                      </slot>
                    </footer>
                  </div>
                </div>`
});
Vue.component('progress-view',{
   data() {
       return{completionRate: 8};
   }
});
Vue.component('coupon', {
    props: ['value'],
    template: `<input type="text" :value="value" @input="updateCode($event.target.value)">`,
    methods: {
        updateCode(code){
            if(code === 'HELLO'){
                alert('No Longer Valid Chump!');

                code = '';
            }

            this.$emit('input',code);
        }
    }
});
var lesson14 = new Vue({
    el: '#lesson14'
});
var lesson15 = new Vue({
    el: '#lesson15'
});
var lesson18 = new Vue({
    el: '#lesson18',
    data: {
        skills: []
    },
    mounted() {
        axios.get('/skills').then(response => console.log(this.skills = response.data));
    }
});
let store = {
    user:{
        name: 'Jane Smith'
    }
};
var lesson24a = new Vue({
    el: '#lesson24a',
    data: {
        foo: 'bar',
        shared: store
    }
});
var lesson24b = new Vue({
    el: '#lesson24b',
    data: {
        foo: 'other bar',
        shared: store
    }
});
var lesson25 = new Vue({
    el: '#lesson25',
    data: {
        coupon: 'freepie'
    }
});
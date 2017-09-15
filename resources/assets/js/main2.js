Vue.component('modal',{
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
       return{completionRate: 75};
   }
});
var lesson14 = new Vue({
    el: '#lesson14'
});
var lesson15 = new Vue({
    el: '#lesson15'
});
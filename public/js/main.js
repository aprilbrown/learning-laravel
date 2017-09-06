Vue.component('task-list',{
    template: `
    <div>
        <task v-for="task in tasks">{{task.task}}</task>
    </div>`,
    data(){
        return{
            tasks: [
                {task: 'go to the store', completed: true},
                {task: 'feed the dog', completed: false},
                {task: 'dance like no one is watching', completed: true},
            ]
        }
    }
});
Vue.component('task',{
    template: '<li><slot></slot></li>'
});
Vue.component('message',{
    props: ['title', 'body'],
    data(){
        return{
         isVisible: true
        };
    }    ,
    template: `
                <article class="message" v-show="isVisible">
                <div class="message-header">
                    {{ title }}
                    <button class="delete" aria-label="delete" @click="isVisible = false"></button>
                </div>
                <div class="message-body">
                    {{ body }}
                </div>
            </article>
    `
});
Vue.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    </div>
    `
})

var lesson1 = new Vue({
    el: '#lesson1',
    data: {
        message: 'Vue Practice'
    }
})
var lesson3 = new Vue({
    el: '#lesson3',
    data: {
        newName: '',
        names: ['Joe', 'Mary', 'Jane', 'Jack']
    },
    methods: {
        addName(){
            this.names.push(this.newName);
            this.newName = '';
        }
    }
})
var lesson5 = new Vue({
    el: '#lesson5',
    data:{
        title: 'I am a button.',
        isLoading: false
    },
    methods: {
        toggleClass(){
            this.isLoading = true;
        }
    }
})
var lesson6 = new Vue({
    el: '#lesson6',
    data: {
        message: 'All Tasks',
        tasks: [
            {description: 'go to the store', completed: true},
            {description: 'feed the dog', completed: false},
            {description: 'dance like no one is watching', completed: true},
        ]
    },
    computed: {
        reversedMessage(){
            return this.message.split('').reverse().join('');
        },
        incompleteTasks(){
            return this.tasks.filter(task => ! task.completed);
        }
    }
})
var lesson7 = new Vue({
    el: '#lesson7'
})
var lesson8 = new Vue({
    el: '#lesson8'
})
var lesson9 = new Vue({
    el: '#lesson9'
})
var lesson10 = new Vue({
    el: '#lesson10',
    data: {
        showModal: false
    }
})
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
        addName: function(){
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
        toggleClass: function(){
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
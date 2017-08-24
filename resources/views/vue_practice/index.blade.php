@extends('layouts.master')

@section ('content')
    <style>
        .is-loading{ background: #5cb85c;}
    </style>
    <script src="https://unpkg.com/vue@2.4.2"></script>
    <div class="col-sm-8 blog-main">
        <div id="lesson1">
            <input type="text" id="input" v-model="message">
            <p>The value of the input is @{{ message }}</p>
        </div>
        <hr>
        <div id="lesson3">
            <ul>
                <li v-for="name in names" v-text="name"></li>
            </ul>

            <input type="text" v-model="newName">
            <button @click="addName">Add Name</button>
        </div>
        <hr>
        <div id="lesson5">
            <button :title="title" :class="{ 'is-loading': isLoading }" @click="toggleClass">Hover or Click me</button>
        </div>
        <hr>
        <div id="lesson6">
            <h1>@{{ reversedMessage }}</h1>
            <ul>
                <li v-for="task in tasks" v-text="task.description"></li>
            </ul>
            <h2>Incomplete Tasks</h2>
            <ul>
                <li v-for="task in incompleteTasks" v-text="task.description"></li>
            </ul>
        </div>
    </div>

    <script>
        var lesson1 = new Vue({
            el: '#lesson1',
            data: {
                message: 'Hello World'
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
    </script>

@endsection
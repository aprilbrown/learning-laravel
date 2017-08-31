@extends('layouts.master')

@section ('content')
    <style>
        .is-loading{ background: #5cb85c;}
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.css"/>
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
        <hr>
        <div id="lesson7">
            <task>A</task>
            <task>B</task>
            <task>C</task>
        </div>
        <hr>
        <div id="lesson8">
            <task-list></task-list>
        </div>
        <hr>
        <div id="lesson9" class="containernp">
            <article class="message">
                <div class="message-header">
                    <p>Hello World</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
            </article>
        </div>
    </div>

    <script src="/js/main.js"></script>

@endsection
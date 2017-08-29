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
    </div>

    <script src="/js/main.js"></script>

@endsection
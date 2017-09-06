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
        <div id="lesson9">

            <message title="Hellow World" body="Lorem ipsum dolar sit amet."></message>
            <message title="Join Me" body="Sup dog?"></message>

        </div>
        <hr>
        <div id="lesson10">
            <modal v-if="showModal" @close="showModal = false">
                <p>Bacon ipsum dolor amet rump short ribs ham brisket strip steak shankle. Pork loin corned beef ham biltong. Pancetta flank swine kevin brisket doner pork chop, spare ribs beef frankfurter pork beef ribs rump. Tongue frankfurter shoulder short ribs.</p>

                <br/>

                <p>Porchetta biltong shank venison picanha boudin pastrami. Meatball tenderloin swine meatloaf chuck beef kevin brisket pork belly burgdoggen jerky cupim shankle. Brisket tongue venison, fatback pork chop pork short ribs pig doner swine. Salami biltong prosciutto, spare ribs kevin fatback ribeye kielbasa doner. Corned beef meatloaf venison prosciutto, porchetta shoulder t-bone shank shankle capicola. Beef spare ribs swine filet mignon rump venison salami. Short ribs chicken picanha kielbasa strip steak alcatra.</p>
            </modal>
            <button @click="showModal = true">Show Modal</button>
        </div>
    </div>

    <script src="/js/main.js"></script>

@endsection
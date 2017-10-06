@extends('layouts.master')

@section ('content')
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@2.4.2"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.css"/>

    <div class="col-sm-8 blog-main">
        <div id="lesson14">
            <modal>
                <template slot="header">Monkey See</template>

                Bacon ipsum dolor amet rump short ribs ham brisket strip steak shankle. Pork loin corned beef ham biltong. Pancetta flank swine kevin brisket doner pork chop, spare ribs beef frankfurter pork beef ribs rump. Tongue frankfurter shoulder short ribs.

                <template slot="footer">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                </template>
            </modal>
        </div>
        <hr>
        <div id="lesson15">
            <progress-view inline-template>
                <div>
                    <h1>Your Progress is @{{ completionRate }}%</h1>
                    <p><button @click="completionRate += 10">Update rate</button></p>
                </div>
            </progress-view>
        </div>
        <hr>
        <div id="lesson18">
            <ul>
                <li v-for="skill in skills" v-text="skill"></li>
            </ul>
        </div>
        <hr>
        <div id="lesson24a">
            <h1>@{{ shared.user.name  }}</h1>
        </div>
        <div id="lesson24b">
            <h1>@{{ shared.user.name  }}</h1>
        </div>
        <hr>
        <div id="lesson25">
            {{--<input type="text" v-model="coupon">--}}
            {{--<input type="text" :value="coupon" @input="coupon = $event.target.value">--}}
            <coupon v-model="coupon">
        </div>
    </div>

    <script src="/js/main2.js"></script>

@endsection
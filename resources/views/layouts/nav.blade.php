<div class="blog-masthead">
    <div class="container">
        <nav class="nav blog-nav">
            <a class="nav-link active" href="/">Home</a>
            @if (Auth::check())
                <a class="nav-link" href="/posts/create">New Post</a>
            @endif

            @if (Auth::check())
                <a class="nav-link ml-auto" href="/">{{ Auth::user()->name }}</a>
            @else
                <a class="nav-link ml-auto" href="/login">Login</a>
                <a class="nav-link" href="/register">Register</a>
            @endif
        </nav>
    </div>
</div>
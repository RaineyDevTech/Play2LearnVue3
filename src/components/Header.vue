<template>
 <header>
        <h1>Play2Learn logo</h1>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="..\login.html">Login</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="../about.html">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbar-dropdown" role="button" data-toggle="dropdown">
                Games
              </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="./games/anagram-hunt.html">Anagram Hunt</a>
                            <a class="dropdown-item" href="..\games\math-facts.html">Math Facts Practice</a>
                        </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="..\..\index.html">Home</a>
                        </li>
                </ul>
            </div>
        </nav>
    </header>
    
</template>

<script>
export default {
    // eslint-disable-next-line
  name: 'Header'
}

</script>

<style>

</style>

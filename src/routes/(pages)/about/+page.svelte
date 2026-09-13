<svelte:head>
    <title>Tre Studio | About</title>
</svelte:head>

<h1>
    <pre>
     88            .o8                                 .
    .8'           "888                               .o8
   .8'   .oooo.    888oooo.   .ooooo.  oooo  oooo  .o888oo
  .8'   `P  )88b   d88' `88b d88' `88b `888  `888    888
 .8'     .oP"888   888   888 888   888  888   888    888
.8'     d8(  888   888   888 888   888  888   888    888 .
88      `Y888""8o  `Y8bod8P' `Y8bod8P'  `V88V"V8P'   "888"</pre>
</h1>

<p class="intro">About the team, cultures and location.</p>

<h2>Our Team</h2>
<img class="avatar" src="images/a1.png" alt="Tony Nguyen" />
<h3>Tony Nguyen</h3>
<p>Founder, Creative Director</p>

<h2>Our cultures</h2>
<ul>
    <li>Teamwork</li>
    <li>Resilience</li>
    <li>Excellent</li>
</ul>

<h2>Our location</h2>
<p>Tre Studio Telegraph</p>
<ul>
    <li>Telegraph District, California</li>
</ul>

<style>
    h1 {
        margin-top: 4em;
        margin-bottom: 3em;
    }

    h2 {
        font-size: 4em;
        margin-top: 1em;
        margin-bottom: 0.5em;
    }

    h3 {
        font-size: 2em;
        margin-bottom: 0.5em;
    }

    img.avatar {
        width: 256px;
        height: 256px;
        image-rendering: pixelated;
        margin-bottom: 4em;
    }

    ul {
        li {
            font-size: 1.25em;
            margin: 0.5em 0;
            margin-left: 1em;
            list-style-type: disc;
        }
    }

    p,
    .intro {
        font-size: 1.25em;
    }
</style>

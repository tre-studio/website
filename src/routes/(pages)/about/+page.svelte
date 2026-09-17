<svelte:head>
    <title>Tre Studio | About</title>
</svelte:head>

<h1>
    <pre>
           .o8                                 .
          "888                               .o8
 .oooo.    888oooo.   .ooooo.  oooo  oooo  .o888oo
`P  )88b   d88' `88b d88' `88b `888  `888    888
 .oP"888   888   888 888   888  888   888    888
d8(  888   888   888 888   888  888   888    888 .
`Y888""8o  `Y8bod8P' `Y8bod8P'  `V88V"V8P'   "888"</pre>
</h1>

<p class="intro">About who we are, our team, cultures and more.</p>

<h2>Who we are</h2>
<p>We are Tre Studio.</p>
<p class="multiline m1">
    Since our founding, we have been driven by a singular mission: to adapt with an ever-changing
    industry, defy what seems impossible, pioneer new paths, and create space for new shoots to
    grow.
</p>

<h2>Our Motto</h2>
<p class="multiline">The old bamboo grows tall so the new shoots can grow taller.</p>

<h2>Our Cultures</h2>
<ul>
    <li>
        <h4>Teamwork</h4>
        <p class="multiline">
            Together, we form a fortress. Like bamboo growing together, we stand stronger as one. We
            share ideas, support one another, and build a studio strong enough to endure whatever
            comes.
        </p>
    </li>
    <li>
        <h4>Resilience</h4>
        <p class="multiline">
            We value developers who can adapt through difficult eras, overcome uncertainty, and
            refuse to be stopped by obstacles.
        </p>
    </li>
    <li>
        <h4>Excellence</h4>
        <p class="multiline">
            Whatever we build, whether games, engines, software, tools, or plugins, we craft it with
            care. We strive to create work that is purposeful, practical, engaging, and worthy of
            the people who use it.
        </p>
    </li>
</ul>

<h2>Our Team</h2>
<img class="avatar" src="images/a1.png" alt="Tony Nguyen" />
<h3>Tony Nguyen</h3>
<p>Founder, Chief Executive Officer</p>

<h2>Our Location</h2>
<p>Tre Studio</p>
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

            &:has(h4) {
                margin-left: 2em;

                &::marker {
                    font-size: 1.75em;
                }
            }

            h4 {
                font-size: 1.75em;
                margin-bottom: 0.5em;
            }

            p {
                font-size: 1em;
            }

            &:not(:last-child) {
                margin-bottom: 2em;
            }
        }
    }

    p,
    .intro {
        font-size: 1.25em;
    }

    p.multiline {
        line-height: 1.3;
    }

    p.m1 {
        margin-top: 1em;
    }
</style>

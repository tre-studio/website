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

<input type="checkbox" id="tony-intro" class="hidden pop" />
<label for="tony-intro" class="pop-intro">
    <img class="avatar" src="images/a1.png" alt="Tony Nguyen" />
    <h3 class="member-name">Tony Nguyen</h3>
    <p>Founder, Chief Executive Officer</p>
</label>

<div class="tony-text pop-text">
    <h4 class="pop-text-heading">Hi, I'm Tony.</h4>
    <br />
    <p class="multiline">
        I'm a gameplay programmer and designer focused on building interactive virtual worlds.
    </p>
    <br />
    <p class="multiline">
        My strongest skills are programming, game design, and project management, with experience in
        Unreal Engine and C++.
    </p>
    <br />
    <p class="multiline">
        As a cofounder, I bring technical excellence and ambitious strategic planning to the team.
        I'm especially interested in solving problems related to gameplay, production, and the
        business side of game development, whether that involves marketing, legal matters, or
        administration.
    </p>
    <br />
    <p class="multiline">
        I'm currently developing my own project, Amicus, with the goal of building an audience for
        my future game studio.
    </p>
    <br />
    <p class="multiline">
        What makes me valuable to a team is the combination of strategic planning and strong
        technical execution. I also have experience in simulation research and the automotive
        industry.
    </p>
    <br />
    <p class="multiline">
        My goal isn't to know everything. It's to learn quickly, solve problems, and help the team
        turn an idea into something players actually want to play.
    </p>
</div>

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

    .hidden {
        display: none;
    }

    .pop-intro {
        cursor: pointer;
        display: block;
        user-select: none;
    }

    h3.member-name {
        text-decoration: wavy underline #727272;
        transition: 0.3s steps(2);

        &:hover {
            text-decoration-color: initial;
        }
    }

    .pop-text {
        margin-top: 2em;
        overflow: hidden;
        height: 0;
        padding: 0 2em;
        border: 0px solid #727272;
        transition: 0.3s steps(3);

        > .pop-text-heading {
            font-size: 2em;
        }
    }

    .pop:checked ~ .pop-text {
        padding: 2em;
        height: initial;
        border: 1px solid #727272;
    }

    .pop:checked ~ .pop-intro {
        > .member-name {
            text-decoration: none;
        }
    }
</style>

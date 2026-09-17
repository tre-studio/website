<script lang="ts">
    // https://www.asciiart.eu/art/eee44c71a6f6a4a5
    const bike = `
      __o
    _ \\<_
...(*)/(*)
`
        .trimEnd()
        .substring(1);

    // https://www.asciiart.eu/art/88a3db92ccc49681
    const game_console = `
 ___
|[_]|
|+ ;|
${"`"}---'
`
        .trimEnd()
        .substring(1);
</script>

<svelte:head>
    <title>Tre Studio</title>
</svelte:head>

<div class="c">
    <!-- font: Small Braille -->
    <a href="contact">
        <pre>
⢀⣀ ⢀⡀ ⣀⡀ ⣰⡀ ⢀⣀ ⢀⣀ ⣰⡀
⠣⠤ ⠣⠜ ⠇⠸ ⠘⠤ ⠣⠼ ⠣⠤ ⠘⠤</pre>
    </a>
    <a href="about">
        <pre>
⢀⣀ ⣇⡀ ⢀⡀ ⡀⢀ ⣰⡀
⠣⠼ ⠧⠜ ⠣⠜ ⠣⠼ ⠘⠤</pre>
    </a>
    <a href="/games">
        <pre>
⢀⡀ ⢀⣀ ⣀⣀  ⢀⡀ ⢀⣀
⣑⡺ ⠣⠼ ⠇⠇⠇ ⠣⠭ ⠭⠕</pre>
    </a>
    <a href="/">
        <pre>
⣇⡀ ⢀⡀ ⣀⣀
⠇⠸ ⠣⠜ ⠇⠇⠇</pre>
        <pre class="patch">
⢀⡀
⠣⠭</pre>
    </a>
</div>
<div class="w">
    <!-- font: roman -->
    <!-- https://patorjk.com/software/taag/#p=display&f=Roman -->
    <pre class="ts">
    .
  .o8
.o888oo oooo d8b  .ooooo.
  888   `888""8P d88' `88b
  888    888     888ooo888
  888 .  888     888    .o
  "888" d888b    `Y8bod8P'</pre>
    <pre class="ts">
             .                     .o8   o8o
           .o8                    "888   `"'
 .oooo.o .o888oo oooo  oooo   .oooo888  oooo   .ooooo.
d88(  "8   888   `888  `888  d88' `888  `888  d88' `88b
`"Y88b.    888    888   888  888   888   888  888   888
o.  )88b   888 .  888   888  888   888   888  888   888
8""888P'   "888"  `V88V"V8P' `Y8bod88P" o888o `Y8bod8P'</pre>

    <p>Coming soon. Made with&nbsp;<span style:color="#e67e80">{"<3"}</span></p>
</div>

<div class="w2">
    <pre>{bike}</pre>
    <pre>{game_console}</pre>
</div>

<style>
    .ts {
        display: inline-block;

        &:first-child {
            margin-right: 1.5em;
        }
    }

    p {
        margin-top: 1em;
        margin-left: 0.5em;
        font-size: 1.25em;
    }

    .w {
        width: fit-content;
        max-width: calc(100% - 2em);
        margin: auto;
        transform: translateY(-50%);
    }

    .c {
        height: 50%;

        > a {
            float: right;

            &:first-child {
                margin-right: 1em;
            }

            > pre {
                display: inline-block;
            }

            position: relative;
            padding: 1em;
            padding-top: 2em;

            &:before {
                position: absolute;
                content: "";
                bottom: 0.25em;
                border-bottom: 0.1875em dotted #a5a5a5;
                animation: b 0.3s steps(3) forwards;
            }

            &:after {
                position: absolute;
                content: "";
                bottom: 0.25em;
                left: 0;
                width: 100%;
                height: 0.75em;
                background-color: #1f1f1f;
                animation: hidden 0.3s steps(1) forwards;
            }

            @media (hover: hover) {
                &:hover {
                    &:before {
                        animation: a 0.3s steps(3) forwards;
                    }
                }
            }

            @keyframes hidden {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }

            @keyframes a {
                0% {
                    left: 1.25em;
                    right: 100%;
                }

                100% {
                    left: 1.25em;
                    right: 1.25em;
                }
            }

            @keyframes b {
                0% {
                    left: 1.25em;
                    right: 1.25em;
                }

                100% {
                    left: 100%;
                    right: 1.25em;
                }
            }
        }
    }

    .w2 {
        position: absolute;
        bottom: 2em;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: calc(100% - 4em);
        display: flex;
        align-items: end;
        justify-content: space-between;
        font-size: 1.25em;
    }

    pre.patch {
        padding-left: 0.25em;
    }

    @media only screen and (max-width: 600px) {
        .ts:first-child {
            margin: 0;
        }

        p {
            margin-left: 0;
        }
    }
</style>

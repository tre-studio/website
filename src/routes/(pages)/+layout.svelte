<script lang="ts">
    let { children } = $props();

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

<header>
    <a href="/">
        <pre>
⣰⡀
⠘⠤</pre>
        <pre>
⡀⣀
⠏</pre>
        <pre>
⢀⡀   ⢀⣀ ⣰⡀ ⡀⢀ ⢀⣸ ⠄ ⢀⡀
⠣⠭   ⠭⠕ ⠘⠤ ⠣⠼ ⠣⠼ ⠇ ⠣⠜</pre>
    </a>
    <nav>
        <a href="/">
            <pre>
⣇⡀ ⢀⡀ ⣀⣀  ⢀⡀
⠇⠸ ⠣⠜ ⠇⠇⠇ ⠣⠭</pre>
        </a><a href="about">
            <pre>
⢀⣀ ⣇⡀ ⢀⡀ ⡀⢀ ⣰⡀
⠣⠼ ⠧⠜ ⠣⠜ ⠣⠼ ⠘⠤</pre>
        </a><a href="contact">
            <pre>
⢀⣀ ⢀⡀ ⣀⡀ ⣰⡀ ⢀⣀ ⢀⣀ ⣰⡀
⠣⠤ ⠣⠜ ⠇⠸ ⠘⠤ ⠣⠼ ⠣⠤ ⠘⠤</pre>
        </a>
    </nav>
</header>

<div>
    {@render children?.()}
</div>

<footer>
    <pre>{bike}</pre>
    <p>Made with&nbsp;<span>{"<3"}</span></p>
    <pre>{game_console}</pre>
</footer>

<style>
    header > * {
        display: inline-block;
    }

    header > a {
        padding: 1em;
        padding-top: 2em;
        padding-left: 2em;

        > pre {
            display: inline-block;
        }
    }

    nav {
        float: right;

        > * {
            display: inline-block;
            > pre {
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
                    height: 1em;
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

            &:last-child {
                pre {
                    margin-right: 1em;
                }
            }
        }
    }

    div {
        /* 100% -  size of header + footer */
        min-height: calc(100% - 184px);
        max-width: 1092px;
        margin: auto;
        padding: 0 2em;
    }

    footer {
        padding: 2em;
        padding-top: 0;
        padding-bottom: 2em;
        font-size: 1.25em;
        display: flex;
        align-items: end;
        justify-content: space-between;

        > p > span {
            color: #e67e80;
        }
    }
</style>

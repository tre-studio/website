<script lang="ts">
    // https://www.asciiart.eu/art/eee44c71a6f6a4a5
    const bike = `
      __o
    _ \<_
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

<div class="c"></div>
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

    <p>Comming soon. Built with&nbsp;<span style:color="#e67e80">{"<3"}</span></p>
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
    }

    .w2 {
        position: absolute;
        bottom: 1em;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: calc(100% - 2em);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.25em;
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

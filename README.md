# coal-ui
dark ui css lib. ([docs](#docs)) ([showcase](https://microdroid.github.io/coal-ui))

## features

- predefined (but customizable) dark design choices
- random helpers everywhere (feature or not? i don't know)
- ~5KiB gzipped when I last checked
- totally responsive
- grid
- zero deps.

## how to use?

`npm i coal-ui` and use the file in `dist/`. (or download it from repo if you don't use npm)

## docs

ok I won't write like literally everything, most of it just works as expected.

### general usage (must read)

- if you're going to use sass, you can import only the stuff you need, which can significantly reduce bundle size.

- breakpoints are `any` `sm` `md` `lg` and `xl`
	- they're just `min-width` media queries, whereas `any` is `min-width: 0px`.

- many classes (like spacing ones) are in form of `${property}-${breakpoint}-${value}`
	- So for example `pt-sm-4` applies padding-top on small screens
	- Also there's `py` (vertical) and `px` (horizontal) and just `p` (all), likewise for margins.

### spacing helpers

- there's padding helpers (e.g. `pt-md-4`) and margin ones (e.g. `mr-any-0`)
- by default there are 10 steps, each are `0.5rem` increments.

### grid

- you guessed it, 12 columns are in a row.
- please wrap your columns with a `div` with class `row`
	- btw there's `.with-gutters` for quick sensible paddings.
- here's how it works:
	- `col-md-4` third (4/12)
	- `col-md-auto` auto width
	- `col-md` fill remaining space
- some examples:
	- `col-any-4` is a third of a row on any screen.
	- `col-md` and another `col-md` are two equal width columns on md screens
	- `col-md-3` and another `col-md`, first is `3/12` space and the other fills remaining
	- `col-md-auto` and another `col-md-2`, first uses what it needs, second uses `2/12` space, rest is empty.

### colors

- default colors are: `black` `very-very-dark` `very-dark` `dark` `dark-grey` `grey` `light-grey` `light` `very-light` `very-very-light` `white`
- for text, use `.black` or whatever
- for backgrounds, use `.black-background`

### interesting classes

- font stuff
	- sizing:
		- `.huge`
		- `.very-huge`
	- weight:
		- `.very-thin`
		- `.thin`
		- `.bold`
		- `.very-bold`
- display stuff
	- `d-any-inline`
	- `d-any-inline-block`
	- `d-any-block`
	- `d-any-inline-flex`
	- `d-any-flex`
- other:
	- `.no-overflow` put ellipsis instead of wrapping text
	- `.no-decoration` remove `<a>` decorations
	- `.circular`
	- `.slightly-rounded`
	- `.rounded`
	- `.very-rounded`
	- `.text-right`
	- `.text-left`
	- `.borderless`

----------

## why?

fun.

## what's the point?

there's no point.

## BUT WHY

ok maybe you want to make that super fast page and want some super quick CSS. but there's still no point of this.

wait, maybe you want to make your life harder.

## how to help dev this?

you probably shouldn't but here:

```bash
git clone git@github.com:MicroDroid/coal-ui.git
cd coal-ui
npm i
npm run dev # dist/coal.css ✔️
```
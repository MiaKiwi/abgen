# Abbreviation Generator

_**kiwi.mia.0041** — ABGEN_

<p align="center">
  <img alt="ABGEN Banner" src="https://static.mia.kiwi/apps/greensill/projects/kiwi.mia.0041/versions/26.0.6/gallery/logo-small.png">
</p>

> [Try it before your buy* it!](https://mia.kiwi/tools/abgen)
>
> \* now on sale for 0,00¤ (free)!

Hi! Welcome to ABGEN, a human-made abbreviation generator! Yes, the correct term is technically [abbreviated term](https://www.iso.org/ISO-house-style.html#:~:text=Abbreviated%20terms%2C%20abbreviations%20and%20contractions), but ABTEGEN doesn't have quite the same ring to it.

## Quick start

```js
import InitialismAbbreviator from './abbreviators/en/FirstSyllableAbbreviator.mjs';

let full = "World Health Organization";
let abbr = new InitialismAbbreviator();

let term = full.split(" ").map(token => abbr.abbreviate(token)).join(".").toUpperCase();

console.log(term); // "W.H.O"
```

## What's it for?

Ever had to find a short and memorable way to refer to something? Maybe a new project or organization? Well use your brain no more! Simply delegate that task to ABGEN!

ABGEN uses top-of-the-line human speech logic algorithms (TO HU SPE L A, or grammar) to craft specially-made abbreviated terms for all your needs! Select your preferred built-in algorithm or implement your own!

Basically, ABGEN is for creating abbreviated terms. Not actually as a final provider, but as an inspiration.

## How does it work?

So-called "abbreviators" are responsible for "abbreviating" tokens (i.e. words or standalone grammatical chunks). These abbreviators can be combined and shuffled to create random or pre-determinate abbreviated terms. For example, one abbreviation can use the English `InitialismAbbreviator` on all tokens to create an initialism. Or, you can use random abbreviator for each token, to get a randomized output that may or may not be readable. Once again: as is, ABGEN is an assistant, not a decision-maker.

## How do I use it?

### Individual abbreviators

You can use built-in abbreviators by calling the `abbreviate()` method on them and passing your token:

```js
import FirstVowelSplitAbbreviator from './abbreviators/en/FirstSyllableAbbreviator.mjs';

let abbr = new FirstVowelSplitAbbreviator();

let term = abbr.abbreviate("Federal"); // FE
```

You can also pass settings to abbreviators when instantiating them. To see what settings an abbreviator supports, you can use the static `defaultSettings` property of the class:

```js
import FirstVowelSplitAbbreviator from './abbreviators/en/FirstSyllableAbbreviator.mjs';

let settings = FirstVowelSplitAbbreviator.defaultSettings;
// {
//     ignoreArticles: true,
//     ignoreConjunctivePrepositions: true,
//     ignoreCoordinatingConjunctions: true,
//     ignorePunctuationMarks: true,
//     preserveVowel: true
// };

let abbr = new FirstVowelSplitAbbreviator(settings);
```

You can also implement your own abbreviator algorithms by extending the `BaseAbbreviator` and implementing its `abbreviate()` method:

```js
import BaseAbbreviator from './abbreviators/BaseAbbreviator.mjs';

class GamblingAbbreviator extends BaseAbbreviator {
    abbreviate(token) {
        return (Math.random() > 0.75) ? '17 black' : null; // LET IT RIDE
    }
}
```

For English abbreviators, you may extend the built-in `BaseEnglishAbbreviator` directly.

### Registering abbreviators

If you want to randomize your outputs, you can use the `Register` to... well... register abbreviators. This acts as a pool you can randomly pick abbreviators from.

```js
import Register from './Register.mjs';
import FirstVowelSplitAbbreviator from './abbreviators/en/FirstSyllableAbbreviator.mjs';
import GamblingAbbreviator from './abbreviators/giggles/GamblingAbbreviator.mjs';

let reg = new Register();

reg.register(new FirstVowelSplitAbbreviator());
reg.register(new GamblingAbbreviator());

let abbr = reg.abbreviators[Math.floor(Math.random() * reg.abbreviators.length)]; // Pick a random abbreviator
```

Or you can use it to just store abbreviators too, that's kind of its purpose I guess.

## Abbreviators

The default abbreviators shipped with ABGEN are:

| Name                               | Description                                                                                                                                                                                                                                                                      | Outputs            | Example                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------ |
| **ExPrefixTruncateAbbreviator**    | Replaces tokens starting with 'ex-' with 'X'. If the token doesn't start with 'ex-', returns `null`.                                                                                                                                                                             | "X" \| `null`      | "Extreme" -> "X"         |
| **FirstSyllableAbbreviator**       | Returns the first syllable of the token, with the first letter of the next syllable if it is not a vowel (and the token has a next syllable or course). Otherwise, returns `null`.                                                                                               | `string` \| `null` | "Switzerland" -> "Switz" |
| **FirstVowelSplitAbbreviator**     | Returns the start of the token up to (and including, if configured) the first vowel. If there is no vowel, returns `null`.                                                                                                                                                       | `string` \| `null` | "Cat" -> "C" or "Ca"     |
| **HomophoneAbbreviator**           | Returns a homophone of the token, if available. Otherwise, returns `null`.                                                                                                                                                                                                       | `string` \| `null` | "To" -> "2"              |
| **InitialismAbbreviator**          | Returns the first letter of the token. If the token is empty, returns `null`.                                                                                                                                                                                                    | `string` \| `null` | "JavaScript"->"J"        |
| **NumericSubstitutionAbbreviator** | Replaces sequences of the same letter by the letter followed by the number of successive occurrences. If the token is unchanged, returns `null`. This is mainly meant to be fed an already-abbreviated token to get results like: "World Wide Web Consortium" -> "WWWC" -> "W3C" | `string` \| `null` | "IEEE" -> "IE3"          |
| **VowelsRemovalAbbreviator**       | Removes all vowels from tokens, works surprisingly well for short tokens. If the token is unchanged, returns `null`.                                                                                                                                                             | `string` \| `null` | "Federal" -> "FDRL"      |
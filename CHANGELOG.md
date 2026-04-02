# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [STVP](https://mia.kiwi/projects/stvp).

## [26.0.6] - 2026-04-02

### Added

- `NumericSubstitutionAbbreviator`, applies "powers" to letters to bundle them (e.g. IEEE becomes IE3)
- `ExPrefixTruncateAbbreviator`, returns "X" for words starting with "ex-" or "x-"
- `HomophoneAbbreviator`, replaces "for" with "4", "to" with "2", etc...



## [26.0.5] - 2026-04-02

### Fixed

- Abbreviators return `null` if they cannot abbreviate the token



## [26.0.4] - 2026-03-30

### Added

- `FirstVowelSplitAbbreviator`: keeps everything from start of token to first vowel (or nothing if there are no vowels)

### Fixed

- `FirstSyllableAbbreviator` breaking if input can't be broken into syllables



## [26.0.3] - 2026-03-25

### Changed

- Reworked abbreviation generators (now 'abbreviators') to handle words (tokens) instead of sentences



## [26.0.1] - 2026-03-17

### Added

- `BaseAbbreviationGenerator`
- `InitialismGenerator`
- `AcronymGenerator`
- `NoVowelsGenerator`
- Grammar helper class

import BaseEnglishAbbreviator from "./BaseEnglishAbbreviator.mjs";



export default class NumericSubstitutionAbbreviator extends BaseEnglishAbbreviator {
    static get displayName() { return "Numeric Substitution"; }



    abbreviate(word) {
        word = this.sanitize(word);

        let output = word;

        let letters = [];

        let previousLetter = null;
        word?.split("")?.forEach(letter => {
            if (previousLetter === null || previousLetter?.letter !== letter) {
                letters.push({ letter: letter, count: 1 })
            } else {
                letters[letters.length - 1] = {
                    letter: letter,
                    count: previousLetter.count + 1
                }
            }

            previousLetter = letters[letters.length - 1];
        });

        output = letters.map(l => `${l?.letter}${l?.count > 1 ? l?.count : ''}`).join("") || null;

        return output === word ? null : output;
    }
}
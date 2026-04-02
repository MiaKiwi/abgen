import BaseEnglishAbbreviator from "./BaseEnglishAbbreviator.mjs";



export default class HomophoneAbbreviator extends BaseEnglishAbbreviator {
    static get displayName() { return "Homophone"; }



    static get homophones() {
        return {
            for: "4",
            to: "2",
            too: "2",
            two: "2",
            you: "U",
            are: "R",
            be: "B",
            see: "C",
            sea: "C",
            eye: "I",
            oh: "O",
            why: "Y",
            ate: "8",
            bee: "B",
            why: "Y"
        };
    }



    static get defaultSettings() {
        return {
            ...super.defaultSettings,
            ignoreArticles: false,
            ignoreConjunctivePrepositions: false,
            ignoreCoordinatingConjunctions: false
        };
    }



    abbreviate(word) {
        word = this.sanitize(word);

        if (!word) return null;

        let output = word;
        if (Object.keys(this.constructor.homophones).includes(word)) output = this.constructor.homophones[word];

        return output === word ? null : output;
    }
}
export default class EnglishGrammar {
    static get articles() {
        return [
            "a",
            "an",
            "the"
        ];
    }

    static get coordinatingConjunctions() {
        return [
            "but",
            "so",
            "or",
            "and"
        ];
    }

    static get conjunctivePrepositions() {
        return [
            "after",
            "although",
            "as",
            "at",
            "because",
            "before",
            "beside",
            "besides",
            "between",
            "by",
            "considering",
            "despite",
            "except",
            "for",
            "from",
            "given",
            "granted",
            "if",
            "into",
            "lest",
            "like",
            "notwithstanding",
            "now",
            "of",
            "on",
            "once",
            "provided",
            "providing",
            "save",
            "seeing",
            "since",
            "so",
            "supposing",
            "than",
            "though",
            "till",
            "to",
            "unless",
            "until",
            "upon",
            "when",
            "whenever",
            "where",
            "whereas",
            "whereve",
            "while",
            "whilst",
            "with",
            "without"
        ];
    }

    static get vowels() {
        return [
            "a",
            "e",
            "i",
            "o",
            "u",
            "y"
        ];
    }

    static get vowelsRegex() {
        return /[aeiouy]/gi
    }

    static syllabify(words) {
        let syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

        return words.match(syllableRegex);
    }
}
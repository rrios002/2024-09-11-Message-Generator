//A program that generates random messages when called
//starting with random word generator
//array of random adjectives
const randAdj = ["aloof", "anxious", "adaptable", "amusing", "animated", "amazing", "apathetic", "agreeable", "acidic", "brave", "breezy", "broad", 
    "beautiful", "bent", "brief", "befitting", "broken", "bright", "colossal", "caring", "cheerful", "cumbersome", "capable", "cynical", "colorful", 
    "draconian", "discreet", "difficult", "delirious", "determined", "drunk", "delicate", "enchanted", "erratic", "easy", "exuberant", "elderly", 
    "exaltant", "entertaining", "fun", "furry", "fragile", "friendly", "familiar", "flowery", "flippant", "fallacious", "glistening", "giant", "grumpy", 
    "glossy", "grandiose", "gifted", "glorious", "happy", "horrible", "harsh", "handsomely", "hideous", "harmonious", "hypnotic", "jittery", "jagged", 
    "jazzy", "jumbled", "jolly", "juicy", "jaded", "kind", "keen", "knotty", "long", "large", "lying", "lowly", "logical", "learned", "luxuriant", "meaty", 
    "madly", "mighty", "malicious", "magnificent", "moaning", "messy", "noxious", "nimble", "normal", "nifty", "nauseating", "nervous", "nappy", 
    "overconfident", "obsolete", "oceanic", "observant", "organic", "overjoyed", "omniscient", "obese", "plain", "panicky", "pretty", "paltry", "prickly", 
    "poor", "perpetual", "quickest", "quixotic", "quaint", "quirky", "quiet", "questionable", "quarrelsome", "rhetorical", "realistic", "roomy", "robust",
    "romantic", "rich", "rigid", "shaky", "snobbish", "successful", "stingy", "splendid", "sorry", "slow", "thirsty", "tasty", "tender", "terrible",
    "thoughtless", "torpid", "trite", "untidy", "unsightly", "unaccounntable", "uptight", "upset", "unequal", "ugly", "voracious", "vengeful", "venomous",
    "victorious", "vague", "volatile", "vast", "wealthy", "weak", "wretched", "wonderful", "worthless", "witty", "warm", "yummy", "young", "youthful", "zippy",
    "zealous", "zesty", "zany" 
];

//array of random nouns
const randNoun = ["actor", "apple", "ant", "alcohol", "aardvark", "airport", "airplane", "animal", "ball", "bill", "bee", "bull", "bobbypin", "banana", "book", "bottle", "boy", 
    "car", "cat", "cap", "chair", "cracker", "chicken", "cheese", "dog", "door", "desk", "elephant", "egg", "engine", "emu", "fish", "flower", "friend", "fox", "fries", "fan", 
    "garden", "guitar", "glass", "girl", "gym", "grape", "house", "hat", "horse", "hallway", "hockeystick", "hill", "ice", "island", "insect", "jacket", "juice", 
    "jungle", "jam", "kite", "key", "kitchen", "kazoo", "king", "koala", "lamp", "lion", "library", "lemon", "lime", "laptop", "mountain", "moon", "music", "muffin", "map",
    "monkey", "mouse", "mice", "notebook", "night", "nurse", "net", "ninja", "ocean", "orange", "oven", "octopus", "olive", "pencil", "plane", "park", "pickle", "pasta",
    "pepper", "pulley", "pog", "pig", "queen", "quilt", "quail", "quarter", "river", "rain", "robot", "runner", "radish", "relish", "rock", "rump", "roast", "rope", "sun",
    "school", "star", "state", "salami", "shell", "spoon", "salmon", "spork", "tree", "train", "table", "tack", "toad", "turnip", "umbrella", "unicorn", "uniform", "uncle", "violin",
    "volcano", "vase", "vasoline", "water", "window", "whale", "womper", "willow", "xylophone", "xenon", "xray", "yacht", "yarn", "yolk", "yak", "zebra", "zoo", "zipper"
];

//array of random verbs
const randVerb = ["aim", "arouse", "argue", "arise", "bounce", "buy", "blow", "bind", "build", "boast", "beat", "block", "brush", "clear", "cling", "collapse",
    "construct", "compel", "declare", "dispose", "drive", "drain", "divert", "design", "examine", "eat", "evolve", "enquire", "extract", "flow", "frown", "forgive",
    "follow", "feel", "fight", "guide", "gain", "grasp", "greet", "grant", "gaze", "give", "hold", "hurt", "heat", "hang", "hide", "incur", "improve", "inquire", 
    "indentify", "introduce", "join", "jump", "jiggle", "kiss", "kick", "knock", "knit", "keep", "lie", "link", "look", "live", "love", "lick", "laugh", "listen", "monitor",
    "modify", "merge", "make", "mill", "move", "notice", "nod", "need", "negotiate", "overcome", "operate", "organize", "own", "outline", "paint", "pray", "proclaim",
    "preserve", "pull", "press", "pat", "plant", "plop", "quote", "question", "run", "ride", "rule", "raise", "rate", "record", "roll", "reflect", "shout", "smoke", "stand",
    "summon", "shake", "stack", "stump", "spoil", "smile", "swim", "see", "trap", "tackle", "translate", "tell", "tuck", "think", "twist", "tickle", "trade", "transport",
    "toss", "underline", "use", "urinate", "urge", "unite", "vanish", "view", "value", "visit", "wander", "write", "whine", "witness", "wash", "whisper", "win", "yield"
];

//a function that obtains a random value from a given array
const wordPicker = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

//tests the arrays and wordPicker functions
/*console.log(wordPicker(randAdj));
console.log(wordPicker(randVerb));
console.log(wordPicker(randNoun));*/

//A function that will randomly choose an ad-lib to display content
const adLibPicker = () => {
    let pickMessage = Math.floor((Math.random() * 4) + 1);//a variable that randomly selects an ad-lib

    switch (true) {
        case (pickMessage === 1):
            console.log(`The Tale of ${wordPicker(randNoun)} the ${wordPicker(randAdj)} \n
            Once upon a time, there was a ${wordPicker(randAdj)} ${wordPicker(randNoun)}, who always liked to ${wordPicker(randVerb)}.\n
            One day, the ${wordPicker(randNoun)} went to the ${wordPicker(randNoun)} to ${wordPicker(randVerb)} a box containing one \n
            ${wordPicker(randAdj)} ${wordPicker(randNoun)}. Suprised by this, the ${wordPicker(randNoun)} watched as the ${wordPicker(randNoun)} \n
            tried to ${wordPicker(randVerb)} its way to the front. The ${wordPicker(randAdj)} look on its ${wordPicker(randNoun)} was obvious to anyone \n
            who tried to ${wordPicker(randVerb)} at it.`);
            break;
        case (pickMessage === 2):
            console.log(`Recipe for Making Seared ${wordPicker(randNoun)} \n
            Ingredients: \n Two cups of roasted ${wordPicker(randNoun)} \n Three lbs of choppped ${wordPicker(randNoun)} \n
            Two Onions \n Butter \n Two tablespoons of ${wordPicker(randAdj)} ${wordPicker(randNoun)} \n Salt, because you're going to need it. \n
            In a ${wordPicker(randAdj)} pot, combine the ${wordPicker(randNoun)} and ${wordPicker(randNoun)}. ${wordPicker(randVerb)} vigorously. \n
            Next, melt the butter \n Make sure to ${wordPicker(randVerb)} before adding the ${wordPicker(randNoun)}. Otherwise, you may have to start over. \n
            Pour into another ${wordPicker(randAdj)} bowl with the butter, and ${wordPicker(randVerb)} the onions directly on top.\n
            Set oven to 350 degrees. ${wordPicker(randVerb)} to your mixture before you ${wordPicker(randVerb)} it in the oven \n
            Bake for 30-35 minutes. Remove from the oven. \n
            What in heaven's ${wordPicker(randNoun)} did you just create?`);
            break;
        case (pickMessage === 3):
            console.log(`Here is your ${wordPicker(randAdj)} fortune: \n You will have a/an ${wordPicker(randAdj)} day. \n
            Tomorrow you will ${wordPicker(randVerb)} a ${wordPicker(randNoun)}. All day.\n Lucky Lotto numbers: 2, 24, 34, 45, 60`);
            break;
        case (pickMessage === 4):
            console.log(`Here is some life advice: \n Seek truth, align yourself with it, Be truth, and inspire others \n to
                do the same. Never back down, or be ashamed to speak the truth. To fail at this would incite evil. Be blessed and \n
                stay in the Light.`);
    }
    
}

adLibPicker();

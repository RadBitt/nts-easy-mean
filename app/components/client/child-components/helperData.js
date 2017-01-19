export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
  const adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];

  const nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}

export function getLength() {
	return Math.floor(Math.random() * 100);
}

export function getType() {

	const type = ['Hunter', 'Piece-o-crap', 'Bucket', 'Sled', 'Log', 'Potato', 'Slick', 'Courage', 'Tub'];

	return `${rando(type)}-${getLength()}`;

}

export function getLoc() {
	
	const location = ['MDR'];
	const slip = ['A', 'B', 'C', 'D', 'E', 'F'];
	const number = Math.floor(Math.random() * 2000);

	return `${rando(location)}-${rando(slip)}-${number}`;
}

export function getDesc() {

	const description = ['clogged my toilet', 'broke my boom', 'put a sock in my muffler', 'threw up in my fuel tank', 'thinks need a fuel change', 'thought i could use a turbo-charger'];

	return `${getFunName()} ${rando(description)}`; 

}

export function getName() {
	const prefixes = ["Buzz ",
"Rock ",
"Amazing ",
 "Bombastic ",
"Chivalrous ",
"Daring ",
"Extraordinary ",
"Fantastic ",                          
"Gritty ",
"Helpful ",
"Incredible ",
"Jaunty ",
"Killer ",
"Lowly ",
"Quixotic ",
"Savage ",
"Unlikely ",
"Vicious ",
"Wild ",      
"Terrifying ",
"Unlikely ",        
"Marvelous ",
"Nefarious ",
"Odious ", 
"Poisonous ",
"Radioactive ",                     
"Smarty ",
"Mask ",
"Powerhouse ",
"Buzz ",
"Smarty ",
"Mask ",
"Tough ",
"Incredible ",
"Firey ",
"Toxic ",
"Wind ",
"Walker ",
"Captain ",
"Capetape ",
"Major ",
"Math ",
"Super ",
"Glitter ",
"Crimson ",
"Moon ",
"Chaser ",
"The Electric ",
"Speeding ",
"Magenta ",
"Comet ",
"Obsidian ",
"Pink ",
"Green ",
"Sparkle ",
"Jade ",
"Jester ",
"Thunder ",
"Rapid ",
"Duke ",
"Whistle ",
"Shadow ",
"Wing ",
"Arrow ",
"Sapphire ",

"Astro ",
"Captain ",
"The Glittering ",
"The Outer Space ",
"The Extraterrestrial ",
"The Swift ",
"Magic "
 ];

const affixes = ["Flash ",
"Imp",
"Jaguar",
"Lizard",
"Nymph",
"Ogre",
"Python",
"Queen",
"Robot",
"Spirit",
"Thief",
"Underdog",
 "Vampire",
"Wizard",
"Witch",
 "Alien ",
"Beast",
"Dragon",
"Eagle",
"Fairy",
"Giant",
"Hawk",              
"Wonder",
"Atom",
"Powerhouse ",
"Protector ",
"Pants",
"Destroyer",
"Crusher",
"Defender",
"Kid",
"Wizard",
"Falcon",
"Phoenix",
"Hurricane",
"Hunter ",
"Sleuth ",
"Kitten",
"Fluffball",
"Dragon",
"Pony",
"Gazius ",
"Magmamingo ",
"Chimitar ",
"Oysterminate ",
"Discorpion ",
"Unicorn",
"Feather",
"Lightning",
"Thunder"];

return `${rando(prefixes)} ${rando(affixes)}`;

}

const filmData = [
  {
    title: "Thor",
    image: "https://www.themoviedb.org/t/p/original/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    category: ["Action", "Fantasy"],
    description: "The warrior Thor (Chris Hemsworth) is cast out of the fantastic realm of Asgard by his father Odin (Sir Anthony Hopkins) for his arrogance and sent to Earth to live amongst humans. Falling in love with scientist Jane Foster (Natalie Portman) teaches Thor much-needed lessons, and his new-found strength comes into play as a villain from his homeland sends dark forces toward Earth",
  },
  {
    title: "The Mask",
    image: "https://images.moviesanywhere.com/99f8f20a1a1d5517c71ac7735484fff8/ec5eb97a-54a7-4615-b773-b976d2b36a90.jpg",
    category: ["Comedy", "Action"],
    description: "Timid bank clerk, Stanley Ipkiss (Jim Carrey). Unfortunately, he's too gentle, and is unable to handle confrontations. After one of the worst days, he finds a mask which depicts Loki, the Norse god of mischief. When he puts it on, he becomes his inner, self: a cartoon wild man. After Ipkiss's alter ego indirectly kills the friend of small-time crime boss, Dorian Tyrel (Peter Greene), he wants the green-faced goon destroyed.",
  },
  {
    title: "The Nun",
    image: "https://m.media-amazon.com/images/M/MV5BY2FjMTliNmEtODcwMS00MmJkLTgwMjMtZWZmNmFhZjdlMjk0XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
    category: ["Horror", "Mystery", "Thriller"],
    description: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in 'The Conjuring 2,' as the abbey becomes a horrific battleground between the living and the damned",
  },
  {
    title: "Fury",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/35580d46655641.585d2b37ad6b0.jpg",
    category: ["Action", "Drama", "War"],
    description: "In April 1945, as the Allies make their final push in the European Theater, a battle-hardened Army sergeant named Wardaddy commands a five-man Sherman tank crew on a deadly mission behind enemy lines. Outnumbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to defend a field hospital from Waffen SS troops",
  },
  {
    title: "Jujutsu Kaisen 0",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnzpmlF8Ujz8nyKfv5hj8p_z2y8cjV5M3uJi6OuyqyNRWRsieL",
    category: ["Action", "Fantasy", "Animation"],
    description: "Yuuta Okkotsu is haunted. Ever since his childhood friend Rika died in a traffic accident, her ghost has stuck with him. But her spirit does not appear as the sweet girl Yuuta once knew. Instead, she manifests as a monstrous and powerful entity who fiercely protects him. Unable to control Rika's violent behavior, Yuuta is helpless to stop the bloodshed that follows from her brutal vengeance. As a result, when apprehended by 'Jujutsu' sorcerers--the secret guardians of the world, trained to combat forces like Rika--Yuuta wishes to be completely isolated so that no one else can get hurt. Yet his apprehender, the master sorcerer Satoru Gojou, has different plans for him: he will join Jujutsu High School and learn to control Rika in order to help people. Now a first-year at this school, Yuuta starts to learn Jujutsu arts and combat malignant beings. Alongside his new classmates Maki Zenin, a Jujutsu weapons expert; Toge Inumaki, a spellcaster who uses his words as weapons; and Panda, a seemingly walking and talking panda bear, Yuuta begins to find his place in the world and, for once, to feel comfortable with his abilities. However, as his training progresses, Yuuta comes to learn that the dangers of the Jujutsu world go far beyond that of wicked spirits.",
  },
  {
    title: "A Silent Voice",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJrlYXvqlm1bAFMMfjhlX970K4B0z2AJv66KKb1Y9gW-4eml2X",
    category: ["Animation", "Drama"],
    description: "The story revolves around Shôko Nishimiya, a grade school student who has impaired hearing. She transfers into a new school, where she is bullied by her classmates, especially Shôya Ishida. It gets to the point where she transfers to another school and as a result, Shôya is ostracized and bullied himself, with no friends to speak to and no plans for the future. Years later, he epicly sets himself on a path to redemption.",
  },
  {
    title: "Avengers: Endgame",
    image: "https://static.posters.cz/image/1300/posters/avengers-endgame-journey-s-end-i122136.jpg",
    category:["Action", "Adventure", "Drama"],
    description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
  },
  {
    title: "Spider-Man: No Way Home",
    image: "https://m.media-amazon.com/images/I/81Fd1jD8DAL._AC_UF894,1000_QL80_.jpg",
    category: ["Action", "Adventure", "Fantasy"],
    description: "Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.",
  },
  {
    title: "Akira",
    image: "https://m.media-amazon.com/images/I/913iYTmWPwL.jpg",
    category: ["Action", "Animation", "Drama"],
    description: "2019. Thirty one years after being destroyed during World War III, Tokyo (now 'Neo-Tokyo') has been rebuilt and is a thriving metropolis. Shotaro Kaneda is the leader of a biker gang. His friend Tetsuo is injured in an accident and taken to a top-secret government facility. He develops telekinetic powers but decides to use them for evil rather than good. He has the same powers as Akira, the force that destroyed Tokyo in 1988, and now it appears that history will repeat itself.",
  },
  {
    title: "Everything Everywhere All at Once",
    image: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg",
    category: ["Action", "Adventure", "Comedy"],
    description: "With her laundromat teetering on the brink of failure and her marriage to wimpy husband Waymond on the rocks, overworked Evelyn Wang struggles to cope with everything, including tattered relationships with her judgmental father Gong Gong and her daughter Joy. She must also brace herself for an unpleasant meeting with an impersonal bureaucrat: Deirdre, the shabbily-dressed IRS auditor. However, as the stern agent loses patience, an inexplicable multiverse rift becomes an eye-opening exploration of parallel realities. Will Evelyn jump down the rabbit hole? How many stars are in the universe? Can weary Evelyn fathom the irrepressible force of possibilities, tap into newfound powers, and prevent an evil entity from destroying the thin, countless layers of the unseen world?",
  },
];

module.exports = filmData;
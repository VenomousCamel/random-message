
const partA = [
    'If the sun sets early,',
    'If the rooster crows at noon,',
    'If the river runs dry,',
    'If the tree loses its leaves,',
    'If the cat wears a hat,',
    'If the clouds turn green,',
    'If the clock strikes thirteen,',
    'If the bread rises twice,',
    'If the lantern glows blue,',
    'If the dragon yawns,'
];
const partB = [
    'then the moon will shine,',
    'then the hens will dance,',
    'then the fish will fly,',
    'then the wind will whisper,',
    'then the mice will laugh,',
    'then the rain will hum,',
    'then the owls will chatter,',
    'then the butter will slide,',
    'then the shadows will waltz,',
    'then the gold will tremble,'
];
const partC = [
    'otherwise the stars will gossip.',
    'otherwise the corn will sulk.',
    'otherwise the frogs will sing.',
    'otherwise the roots will dream.',
    'otherwise the cheese will vanish.',
    'otherwise the thunder will nap.',
    'otherwise the night will linger.',
    'otherwise the jam will sigh.',
    'otherwise the cobwebs will listen.',
    'otherwise the knights will snore.'
];

function generate () {
    return `${partA[Math.floor(Math.random() * partA.length)]} ${partB[Math.floor(Math.random() * partB.length)]} ${partC[Math.floor(Math.random() * partC.length)]}`
}

console.log(generate());



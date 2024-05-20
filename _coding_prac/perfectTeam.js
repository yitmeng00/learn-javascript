function perfectTeam(skills) {
    // Object to store the count of each skill
    const skillCount = { p: 0, c: 0, m: 0, b: 0, z: 0 };

    // Count each character in the string
    for (let i = 0; i < skills.length; i++) {
        if (skillCount.hasOwnProperty(skills[i])) {
            skillCount[skills[i]]++;
        }
    }

    // Determine the number of complete teams that can be formed
    return Math.min(
        skillCount.p,
        skillCount.c,
        skillCount.m,
        skillCount.b,
        skillCount.z
    );
}

console.log(perfectTeam("pcmzbpcmzb"));

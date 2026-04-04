function solve(input) {
    let n = Number(input.shift());
    let astronauts = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [name, section, skillsStr] = line.split(' ');
        let skills = skillsStr.split(',');

        astronauts[name] = {
            section: section,
            skills: skills
        };
    }

    let command = input.shift();

    while (command !== "End") {
        let tokens = command.split(' / ');
        let action = tokens[0];
        let name = tokens[1];

        switch (action) {
            case "Perform": {
                let section = tokens[2];
                let skill = tokens[3];

                if (
                    astronauts[name].section === section &&
                    astronauts[name].skills.includes(skill)
                ) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;
            }

            case "Transfer": {
                let newSection = tokens[2];
                astronauts[name].section = newSection;
                console.log(`${name} has been transferred to: ${newSection}`);
                break;
            }

            case "Learn Skill": {
                let newSkill = tokens[2];

                if (astronauts[name].skills.includes(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    astronauts[name].skills.push(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
                break;
            }
        }

        command = input.shift();
    }

    for (let name in astronauts) {
        let sortedSkills = astronauts[name].skills.sort((a, b) => a.localeCompare(b));
        console.log(
            `Astronaut: ${name}, Section: ${astronauts[name].section}, Skills: ${sortedSkills.join(', ')}`
        );
    }
}
solve([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"
])
function solution(input) {
    let countOfGuildMemebers = input.shift();
    let members = {};

    for(let i = 0; i < countOfGuildMemebers; i++) {

        let[mamberName, role, skill] = input.shift().split(' ');

        let skills = skill.split(',');

        members[mamberName] = {
            role: role,
            skill: skills,
        };
    }

    let commands = input.shift();
    while(commands !== 'End') {

        let tokens = commands.split(' / ');

        let action = tokens[0];
        let name = tokens[1];

        switch (action) {
            case 'Perform':
                let role = tokens[2];
                let mainSkill = tokens[3];
                perform(name, role, mainSkill);
                break;

            case 'Reassign': 
                let newRole = tokens[2];
                reassign(name, newRole);
                break;

            case 'Learn Skill': 
                let newSkill = tokens[2];
                learnSkill(name, newSkill);
                break;
        }

        commands = input.shift();
    }

    for(let name in members) {

        let sortedSkills = members[name].skill.sort((a, b) => a.localeCompare(b));

        console.log(`Guild Member: ${name}, Role: ${members[name].role}, Skills: ${sortedSkills.join(', ')}`);
    }

    function perform(nameOfMember, role, mainSkill) {

        if(members[nameOfMember].skill.includes(mainSkill) &&
            members[nameOfMember].role === role
        ) {
            console.log(`${nameOfMember} has successfully performed the skill: ${mainSkill}!`)
        } else {
            console.log(`${nameOfMember} cannot perform the skill: ${mainSkill}.`)
        }
    }

    function reassign(name, newRole) {
        members[name].role = newRole;
        console.log(`${name} has been reassigned to: ${newRole}`);
    }

    function learnSkill(name, newSkill) {
        if(!members[name].skill.includes(newSkill)) {
            members[name].skill.push(newSkill);
            console.log(`${name} has learned a new skill: ${newSkill}.`);
        } else {
            console.log(`${name} already knows the skill: ${newSkill}.`);
        }
    }
}
solution(
    [
        "3",
        "Arthur warrior swordsmanship,shield",
        "Merlin mage fireball,teleport",
        "Gwen healer healing,alchemy",
        "Perform / Arthur / warrior / swordsmanship",
        "Perform / Merlin / warrior / fireball",
        "Learn Skill / Gwen / purification",
        "Perform / Gwen / healer / purification",
        "Reassign / Merlin / healer",
        "Perform / Merlin / healer / teleport",
        "End"
    ]

)
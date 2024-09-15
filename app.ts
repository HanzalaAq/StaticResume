const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;

toggleSkillsBtn!.addEventListener('click', () => {
    if (skillsSection!.style.display === 'none') {
        skillsSection!.style.display = 'block'; 
    } else {
        skillsSection!.style.display = 'none'; 
    }
});

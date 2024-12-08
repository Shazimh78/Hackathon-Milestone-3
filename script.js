document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capture form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const university = document.getElementById("university").value;
    const graduation = document.getElementById("graduation").value;
    const skills = document.getElementById("skills").value.split(",");
    const workExperience = document.getElementById("work-experience").value;

    // Populate resume fields
    document.getElementById("display-name").textContent = name;
    document.getElementById("display-contact").textContent = `Email: ${email} | Phone: ${phone}`;
    document.getElementById("display-degree").textContent = `${degree}, ${university} - Graduation Year: ${graduation}`;
    
    // Clear and add new skills to the skills list
    const skillList = document.getElementById("display-skill-list");
    skillList.innerHTML = "";
    skills.forEach(function(skill) {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        skillList.appendChild(li);
    });

    // Populate work experience
    document.getElementById("display-work-experience").textContent = workExperience;
});

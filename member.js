function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
    var skillsMemberTextLength = skillsMemberText.length;
    var skillsMemberTextLengthValue = skillsMemberTextLength * 10;
    var skillsMemberTextLengthValueTotal = skillsMemberTextLengthValue + "%";
    skills.style.width = skillsMemberTextLengthValueTotal;
    skills.innerHTML = skillsMemberText;
}
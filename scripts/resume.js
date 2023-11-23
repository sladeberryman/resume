$(document).ready(function() {
    $.getJSON("resume.json", function(data) {
        var resumeData = $("#resumeData");
        var html = '';

        // Name
        html += '<h1>' + data.name + '</h1>';

        // Contact Information
        html += '<div class="resume-section top-header">';
        html += '<p>' + data.email + ' | ' + data.phone + '</p>';
        html += '<a href="' + data.linkedIn + '">' + data.linkedIn + '</a>';
        html += '</div>';
        html += '<hr>';

        // Education
        html += '<h3>Education</h3>';
        for (var i = 0; i < data.education.length; i++) {
        html += '<div class="resume-section">';
        html += '<h4>' + data.education[i].degree + '</h4>';
        html += '<p>' + data.education[i].university + '</p>';
        html += '<p>' + data.education[i].startYear + '-' + data.education[i].endYear + '</p>';
        html += '<p>' + data.education[i].gpa + ' GPA</p>';
        html += '</div>';
        }
        html += '<br>';

        // Work Experience
        html += '<h3>Work Experience</h3>';
        for (var j = 0; j < data.experience.length; j++) {
        html += '<div class="resume-section">';
        html += '<h4>' + data.experience[j].position + '</h4>';
        html += '<p>' + data.experience[j].company + '</p>';
        html += '<p>' + data.experience[j].duration + '</p>';
        html += '<p>' + data.experience[j].description + '</p>';
        html += '</div>';
        }
        html += '<br>';

        // Skills
        html += '<h3>Skills</h3>';
        html += '<ul>';
        for (var k = 0; k < data.skills.length; k++) {
        html += '<li>' + data.skills[k] + '</li>';
        }
        html += '</ul>';


        resumeData.html(html);
    });
});
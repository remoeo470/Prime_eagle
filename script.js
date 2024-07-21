// rewrite the json file such that it also takes email and profile pic url and set email and profile pic url 
// in the template
function readJson() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("custom_logo").textContent = data.name;
            document.getElementById('name').textContent = data.name;
            document.getElementById('title').textContent = data.title;
            document.getElementById('description').textContent = data.description;
            document.getElementById('email').href = "mailto:" +data.email;
            document.getElementById('contact_').src = data.profile_pic;
        })
        .catch(error => console.error('Error:', error));
}
function readJson() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("custom_logo").textContent = data.name;
            document.getElementById('name').textContent = data.name;
            document.getElementById('title').textContent = data.title;
            document.getElementById('description').textContent = data.description;
        })
        .catch(error => console.error('Error:', error));
}
readJson();
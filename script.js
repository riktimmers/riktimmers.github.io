function loadSection(file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("File not found");
      return response.text();
    })
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('main-content').innerHTML = "<p>Error loading content</p>";
      console.error(error);
    });
}

// Load introduction by default
loadSection('introduction.html');


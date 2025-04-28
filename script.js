// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');

// Check if the user prefers dark mode
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  document.body.classList.add("dark-mode");
}

// Toggle between light and dark mode
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Apply the last theme the user chose (if any)
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add("dark-mode");
}

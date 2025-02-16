const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const mainContent = document.querySelector('.main-content');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    mainContent.classList.toggle('shifted');

    // Move the toggle button inside the sidebar when opened
    if (sidebar.classList.contains('show')) {
        toggleBtn.style.left = "265px"; // Inside the sidebar
    } else {
        toggleBtn.style.left = "15px"; // Back to normal position
    }
});

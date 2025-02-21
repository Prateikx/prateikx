document.addEventListener("DOMContentLoaded", function () {
    // Prevent multiple declarations
    if (window.sidebarInitialized) return;
    window.sidebarInitialized = true;

    console.log("Sidebar script is running!");

    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    const mainContent = document.querySelector(".main-content");

    if (!sidebar || !toggleBtn) {
        console.error("Sidebar or Toggle Button not found in the document.");
        return;
    }

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("show");
        mainContent?.classList.toggle("shifted");

        // Move the toggle button inside the sidebar when opened
        toggleBtn.style.left = sidebar.classList.contains("show") ? "265px" : "15px";
    });

    console.log("Sidebar initialized successfully.");
});

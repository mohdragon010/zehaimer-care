// You can add any dynamic content or further functionality here if needed
console.log("Page Loaded. GPS placeholder is ready for future content.");
// Check if the user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    // Redirect to the login page if not logged in
    window.location.href = '../index.html';
}

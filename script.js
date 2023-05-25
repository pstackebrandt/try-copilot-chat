function addNameButtonListener() {
    const nameButton = document.getElementById("nameButton");
    nameButton.addEventListener("click", () => {
        const firstName = prompt("What is your first name?");
        localStorage.setItem("firstName", firstName);
    });
}
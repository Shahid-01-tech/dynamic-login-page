const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Toggle Panels
registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Get Forms
const signUpForm = document.querySelector(".sign-up form");
const signInForm = document.querySelector(".sign-in form");

// Signup API
signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await response.json();
        alert(data.message);

        if (response.ok) {
            container.classList.remove("active");
            signUpForm.reset();
        }

    } catch (error) {
        alert("Signup failed");
        console.log(error);
    }
});

// Login API
signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();
        alert(data.message);

        if (response.ok) {
            signInForm.reset();
        }

    } catch (error) {
        alert("Login failed");
        console.log(error);
    }
});

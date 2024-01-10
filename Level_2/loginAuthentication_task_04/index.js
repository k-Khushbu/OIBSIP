
  const form = document.querySelector('form');

  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);
    console.log(user)
    if (user) {
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      const span = document.querySelector("span");
      span.textContent = "Invalid username or password";
      span.style = "color: red";
    }
  }

  function register() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
      alert('Username already exists. Please choose another one.');
    } else {
      users.push({ username, password });
      alert('Registration successful! You can now login.');
    }
  }

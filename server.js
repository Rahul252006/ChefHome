const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Parse JSON body
app.use(express.json());

// Serve static files (images, fonts, CSS)
app.use(express.static(__dirname));

// Serve index.html at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Mock user
const mockUser = { email: "test@example.com", password: "123456" };

// POST route for login
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, message: "Please enter email and password" });
    }

    if (email === mockUser.email && password === mockUser.password) {
        return res.json({ success: true, message: "Login Successful ✅" });
    } else {
        return res.json({ success: false, message: "Invalid Email or Password ❌" });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

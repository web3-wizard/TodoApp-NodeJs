import logger from "../Utils/logger.js";

// Simple in-memory user storage
const users = [{ id: 1, username: "user", password: "password" }];

const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    req.session.user = user;
    res.status(200).json({ message: "Login successful" });
    logger.info(`User ${username} logged in`);
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

const logout = (req, res) => {
  const username = req.session.user
    ? req.session.user.username
    : "Unknown User";

  req.session.destroy((err) => {
    if (err) {
      logger.error(`Error during logout: ${err.message}`);
      res.status(500).json({ error: "Logout failed" });
    } else {
      res.status(200).json({ message: "Logout successful" });
      logger.info(`User ${username} logged out`);
    }
  });
};

const register = (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((u) => u.username === username)) {
    res.status(400).json({ error: "Username is already taken" });
  } else {
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    res.status(201).json({ message: "Registration successful", user: newUser });
    logger.info(`New user registered: ${username}`);
  }
};

export { login, logout, register };

import logger from "../Utils/logger.js";

const dashboard = (req, res) => {
  if (req.session.user) {
    res
      .status(200)
      .json({
        message: "Welcome to the dashboard",
        username: req.session.user.username,
      });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

export default dashboard;

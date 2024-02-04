import User from "../models/user.js";

export function getLogin(req, res) {
  res.render("auth/login", { error: req.query.error });
}

export async function postLogin(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && user.password === password) {
      req.session.user = user; // Store user in session
      res.redirect("/products");
    } else {
      res.redirect("/auth/login?error=Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export function getRegister(req, res) {
  res.render("auth/register", { error: req.query.error });
}

export async function postRegister(req, res) {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.redirect("/auth/register?error=Username already exists");
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      res.redirect("/auth/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.redirect("/auth/login");
    }
  });
}

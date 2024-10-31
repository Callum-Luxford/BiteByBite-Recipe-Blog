// MODULES FOR CONTROLLER

// GET
// HOMEPAGE
exports.homePage = async (req, res) => {
  res.render("homePage", {
    title: "Homepage",
  });
};

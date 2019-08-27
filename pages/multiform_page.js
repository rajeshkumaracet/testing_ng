const profilePage = () => {
  element(by.model("formData.name")).sendKeys("Adappt");
  element(by.model("formData.email")).sendKeys("testTeam@adappt.co.uk");
};

module.exports = profilePage;

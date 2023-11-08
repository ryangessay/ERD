const EventRegistration = artifacts.require("EventRegistration");

module.exports = function (deployer) {
  deployer.deploy(EventRegistration);
};

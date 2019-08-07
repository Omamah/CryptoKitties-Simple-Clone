const GradientToken = artifacts.require("GradientToken");

module.exports = function(deployer) {
    deployer.deploy(GradientToken);
};
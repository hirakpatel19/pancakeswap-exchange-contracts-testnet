//const PancakeFactoryV2 = artifacts.require("PancakeFactoryV2");
//
//let addressFeeSetter = "";
//
//module.exports = function(deployer) {
//    deployer.deploy(PancakeFactoryV2, addressFeeSetter);
//};

const PancakeRouterV2 = artifacts.require("PancakeRouterV2");

let weth = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";
let factory = "0x0a2255E10C0ffEEa9122D1D5d1F7d750412506a0";

module.exports = function(deployer) {
    deployer.deploy(PancakeRouterV2, factory, weth);
};

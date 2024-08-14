const LearnChainToken = artifacts.require("LearnChainToken");
const LearnChainTokenSale = artifacts.require("LearnChainTokenSale");

module.exports =async function(deployer){
    await deployer.deploy(LearnChainToken,1000000).then(async (instance)=>{
        var tokenInstance = instance;
        var tokenPrice = 100000000000000;
        await deployer.deploy(LearnChainTokenSale,LearnChainToken.address,tokenPrice).then((instance)=>{
            var tokenSaleInstance = instance;
            tokenInstance.transfer(tokenSaleInstance.address,1000000);
        })
    });
};

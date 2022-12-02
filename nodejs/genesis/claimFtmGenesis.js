//Claim FTM Genesis (Nursery) rewards (LIF3)
//create config.json to hold private key or throw into here directly
const Web3 = require('web3');
var web3 = new Web3('https://rpc.tombchain.com');
//const BigNumber = require('bignumber.js');

var config = require('./config.json');
const private_key = config.pk1
const my_address = web3.eth.accounts.privateKeyToAccount(private_key).address
console.log("Runner Address: " + my_address)

//ABI
const claimABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_lifeAddress","internalType":"address"},{"type":"uint256","name":"_poolStartTime","internalType":"uint256"},{"type":"uint256","name":"_runningTime","internalType":"uint256"},{"type":"uint256","name":"_totalRewards","internalType":"uint256"},{"type":"address","name":"_feeCollector","internalType":"address"}]},{"type":"event","name":"AddPool","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"uint256","name":"totalAllocPoint","internalType":"uint256","indexed":false},{"type":"uint16","name":"depositFee","internalType":"uint16","indexed":false}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"uint256","name":"depositFee","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"ModifyPool","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"uint256","name":"totalAllocPoint","internalType":"uint256","indexed":false},{"type":"uint16","name":"depositFee","internalType":"uint16","indexed":false}],"anonymous":false},{"type":"event","name":"OperatorTransferred","inputs":[{"type":"address","name":"previousOperator","internalType":"address","indexed":true},{"type":"address","name":"newOperator","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RecoverUnsupported","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"token","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"address","name":"targetAddress","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"RewardPaid","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateFeeCollector","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"feeCollector","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_token","internalType":"contract IERC20"},{"type":"uint16","name":"_depositFee","internalType":"uint16"},{"type":"bool","name":"_withUpdate","internalType":"bool"},{"type":"uint256","name":"_lastRewardTime","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeCollector","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getGeneratedReward","inputs":[{"type":"uint256","name":"_fromTime","internalType":"uint256"},{"type":"uint256","name":"_toTime","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"governanceRecoverUnsupported","inputs":[{"type":"address","name":"_token","internalType":"contract IERC20"},{"type":"uint256","name":"_amount","internalType":"uint256"},{"type":"address","name":"_to","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isOperator","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isOwnerOrOperator","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"life","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lifePerSecond","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"operator","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingShare","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolEndTime","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"token","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardTime","internalType":"uint256"},{"type":"uint256","name":"accLifePerShare","internalType":"uint256"},{"type":"uint16","name":"depositFee","internalType":"uint16"},{"type":"bool","name":"isStarted","internalType":"bool"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolStartTime","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"runningTime","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFee","internalType":"uint16"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFeeCollector","inputs":[{"type":"address","name":"_feeCollector","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalRewards","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOperator","inputs":[{"type":"address","name":"newOperator_","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}]
//Nursery (Genesis)
const nursery = "0x9303dc2fb2fb99e4d9c281266aea56e4c852dac9"

async function getGasPrice() {
    //Get Gas Price
    const gasPrice = await web3.eth.getGasPrice();
    console.log("Gas Price: " + gasPrice / 1e9 + " gwei")
    const gasUse = gasPrice
    //console.log(gasPrice)
    if (gasPrice > 800000000000) {
        var modGasPrice = "800000000000";        
    } else {
        var modGasPrice = gasPrice;
    }
    console.log("Mod Gas: " + modGasPrice)
    return { gasPrice, modGasPrice }
}

async function getNonce() {
    //Get Nonce
    const nonce = await web3.eth.getTransactionCount(my_address);
    console.log("nonce: " + nonce)
    return { nonce }
}

async function claimFtmGenesis() {

    //call Gas Price Function
    var gas = await getGasPrice();
    const gasPrice = gas.modGasPrice;
    const gasPriceCurrent = gas.gasPrice

    //call Nonce Function
    var currentNonce = await getNonce();
    const nonce = currentNonce.nonce;

    var contract = new web3.eth.Contract(claimABI, nursery);
    const claimLif3 = await contract.methods.deposit(1, 0).encodeABI();
    console.log(claimLif3)

    var gasLimit = await web3.eth.estimateGas({
        from: my_address,
        to: nursery,
        value: 0,
        data: claimLif3,
        nonce: nonce
    })

    console.log("Gas Limit: " + gasLimit)

    const tx = {
    from: my_address,
    to: nursery,
    gasPrice: gasPrice,
    gas: gasLimit,
    value: 0,
    data: claimLif3,
    nonce: nonce
    }
            
    web3.eth.accounts.signTransaction(tx, private_key)
    .catch((e) => console.log(e.message))
    .then((signedTX) => {

    web3.eth.sendSignedTransaction(signedTX.raw || signedTX.rawTransaction)
    .catch((error) => console.log(`[${Math.floor(Date.now() / 1000)}] broadcast failed ${error.message}`))
    .then(() => console.log(`[${Math.floor(Date.now() / 1000)}] claim rewards from endpoint `))
    })
          
    console.log(tx)
    console.log("Claim FTM genesis Lif3 from Nursery! Check tombscout, https://tombscout.com/address/" + my_address)
    
}

claimFtmGenesis()

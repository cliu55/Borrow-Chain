// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
//import { default as contract } from 'truffle-contract'
//import borrow_artifact from '../../build/contracts/BorrowChain.json'
//import borrow_chain_artifacts from '../../build/contracts/BorrowChain.json'

//  var BorrowArtifact = borrow_artifact;
//  var BorrowChain = TruffleContract(BorrowArtifact);
//BorrowChain.setProvider(window.web3.currentProvider);
console.log("code reach here1");


//function from which to borrow (html)
//window.borrowAnItem = function() {
  //for now
//  let itemId = 1;
  //get current time
//  let dateTime = getDateTimeOfNow();

//  var borrowInstance;
//  try {
    console.log("code reach here");
//    BorrowChain.deployed().then(function(instance){
      console.log("code reach here1");
  //    borrowInstance = instance;
      console.log("error1");
  //    borrowInstance.borrowItem(itemId, dateTime).then(function(){
        console.log("item borrowed");
    //  })
    //})
  //} catch (err) {
  //  console.log("error")
  //}

//}

const getDateTimeOfNow = function () {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+'-'+time;
  return dateTime;
}

$( document ).ready(function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545.");
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  try {
      console.log("code reach here");
      BorrowChain.deployed().then(function(instance){
        console.log("code reach here1");
        borrowInstance = instance;
        console.log("error1");
        borrowInstance.borrowItem(1, 'string1').then(function(){
          console.log("item borrowed");
        })
      });
    } catch (err) {
      console.log("error")
    }

});

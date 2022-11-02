const firebaseConfig = {
  apiKey: "AIzaSyBgxB4m9bJmdIlfIJ2elrFGrHAnHk0Dl7s",
  authDomain: "iotsfrgmhss-1d824.firebaseapp.com",
  databaseURL: "https://iotsfrgmhss-1d824-default-rtdb.firebaseio.com",
  projectId: "iotsfrgmhss-1d824",
  storageBucket: "iotsfrgmhss-1d824.appspot.com",
  messagingSenderId: "366176041985",
  appId: "1:366176041985:web:4171e75e9885da294c9400",
  measurementId: "G-H26RJLGXDT"
};
firebase.initializeApp(firebaseConfig);
console.log('engine started');
//init firebase


//recievers


//actions
function action(obj){
  if (obj.getAttribute('class') == 'order'){
    order(obj.value);
    obj.innerText="Ordered";
    obj.setAttribute('class','ordered');
    console.log(obj.value);
     document.getElementById(`${obj.value}`).innerText = "ORDERED";
  }
  if (obj.getAttribute('class') == 'ordered'){
    console.log('Already Ordered');
  }
}

//write to database
function order(item){
  console.log('working')
}
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
  document.getElementById("sugar").innerText=snapshot.val().Sugar
  document.getElementById("drinks").innerText=snapshot.val().cool_drinks
  document.getElementById("eggs").innerText=snapshot.val().eggs
}, function (error) {
   console.log("Error: " + error.code);
});



const h2 = document.createElement("h2");
h2.textContent = "";

document.querySelector("body").appendChild(h2);



window.addEventListener('message', function(e) {
    var $iframe = jQuery("#myIframe");
    var eventName = e.data[0];
    var data = e.data[1];
    switch(eventName) {
      case 'setHeight':
        $iframe.height(data);
        break;
    }
  }, false);

  function resize() {
    var height = document.getElementsByTagName("html")[0].scrollHeight;
    window.parent.postMessage(["setHeight", height], "*"); 
  }

  function validate() {
    var text;
       if( document.myForm.name.value == "" ) {
         text = "Name cannot be empty";
          document.getElementById("demo").innerHTML = text;
          document.myForm.name.focus() ;
          return false;
       }
       if( document.myForm.email.value == "" ) {
         text = "E-mail cannot be empty";
          document.getElementById("demo").innerHTML = text;
          document.myForm.email.focus() ;
          return false;
       }
  var emailID = document.myForm.email.value;
  atposn = emailID.indexOf("@");
  dotposn = emailID.lastIndexOf(".");
  if (atposn < 1 || ( dotposn - atposn < 2 )) {
  text = "Please enter valid email ID";
  document.getElementById("demo").innerHTML = text;
  document.myForm.email.focus() ;
  return false;
}
       if( document.myForm.phone.value == "" || isNaN( document.myForm.phone.value ) ||
          document.myForm.phone.value.length != 10 ) {
          text = "Please enter a valid 10-digit phone number";
          document.getElementById("demo").innerHTML = text;
          document.myForm.phone.focus() ;
          return false;
       }
       if( document.myForm.subject.value == " , 5" ) {
          text = "Pick a real food!";
          document.getElementById("demo").innerHTML = text;
          return false;
       }
       return( true );
    }
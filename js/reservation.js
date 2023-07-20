function sendMail() {
    var a = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      people: document.getElementById("people").value,
      time: document.getElementById("time").value,
      date: document.getElementById("date").value,
      number: document.getElementById("number").value,
      notes: document.getElementById("notes").value,
    };
  
    const serviceID = "sservice_361fbjt";
    const templateID = "template_lszajus";
  
    emailjs.send("service_361fbjt","template_lszajus");
      then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("people").value = "";
          document.getElementById("time").value = "";
          document.getElementById("date").value = "";
          document.getElementById("number").value = "";
          document.getElementById("notes").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
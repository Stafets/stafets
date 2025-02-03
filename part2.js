document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit-btn');
  
    submitBtn.addEventListener('click', () => {
      const herResponse = document.getElementById('her-response').value.trim().toLowerCase();
  
      if (herResponse === 'yes') {
        alert("HEHEHEHEHEHEHE! Thank you for saying yes! See you in a few days, my love!!!! ❤️");
      } else {
        alert("Hmm... I think you misunderstood ET JE SUIS SUR QUE TU AS MAL COMPRIS PETIT. Let me rephrase: Will you be my Valentine? (Please say 'yes' 😊)");
      } 
    });
  });
 function contact(event) {
      event.preventDefault();
  
      const message = document.getElementById('message');
  
      emailjs
          .sendForm(
              'service_5nufpuf',
              'template_q56h19q',
              event.target,
              '5A7nE4A9eKeospPJF'
          )
          .then(() => {
              console.log("Message sent successfully!");
  
              event.target.reset();
          })
          .catch(() => {
            console.log("Message did not send.")
          });
  }
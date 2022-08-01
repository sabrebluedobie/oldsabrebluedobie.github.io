(function() {
    const quotes = [
      {
        quote:
        "Failure is not the opposite of success: it's part of success.",
        author: " -Arianna Huffington"
      },
      {
        quote:
        "If your dreams don't scare you, they are too small.",
        author: " -Richard Branson"
      },
      {
        quote:
          "Believe you can and you're halfway there.",
        author: " -Theodore Roosevelt"
      },
      {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: " -David Thoreau"
      },
      {
        quote:
          "Quality means doing it right when no one is looking.",
        author: " -Henry Ford"
      },
      {
        quote:
          "It always seems impossible until it's done.",
        author: " -Nelson Mandela"
      },
      {
        quote: "The difference between ordinary and extraordinary is tht little extra.",
        author: " -Jimmy Johnson"
      },
      {
        quote: "Progress is impossible without change, and those who change their minds cannot change anything.",
        author: " -George Bernard Shaw"
      },
      {
        quote: "What we far of doing most is usually what we most need to do.",
        author: " -Ralph Waldo Emerson"
      },
      {
        quote: "You are not your resume, you are your work.",
        author: " -Seth Godin"
      }
    ];
  
    const btn = document.getElementById("generate-btn");
  
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();
  
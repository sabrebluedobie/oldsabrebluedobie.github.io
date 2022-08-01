(function() {
    const quotes = [
      {
        quote:
        "Failure is not the opposite of success: it&apos;s part of success.",
        author: " -Arianna Huffington"
      },
      {
        quote:
        "If your dreams don&apos;t scare you, they are too small.",
        author: " -Richard Branson"
      },
      {
        quote:
          "Believe you can and you&apos;re halfway there.",
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
          "It always seems impossible until it&apos;s done.",
        author: " -Nelson Mandela"
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
  
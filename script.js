const quotes = [
  {'author': 'Albert Einstein', 
   'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
  },

  {'author': 'Mahatma Gandhi', 
   'quote': 'Be the change that you wish to see in the world.'
  },

  {'author': 'Anne Frank', 
   'quote': 'How wonderful it is that nobody need wait a single moment before starting to improve the world.'
  },

  {'author': 'Margaret Mead', 
   'quote': 'Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.'
  },

  {'author': 'Nelson Mandela', 
   'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
  },
  
  {'author': 'Dalai Lama', 
   'quote': 'The purpose of our lives is to be happy.'
  },

  {'author': 'John Lennon', 
   'quote': 'Life is what happens when you\'re busy making other plans.'
  },

  {'author': 'Stephen King', 
   'quote': 'Get busy living or get busy dying.'
  },

  {'author': 'Mae West', 
   'quote': 'You only live once, but if you do it right, once is enough.'
  },

  {'author': 'Thomas A. Edison', 
   'quote': 'Many of life\'s failures are people who did not realize how close they were to success when they gave up.'
  },

  {'author': 'Babe Ruth', 
   'quote': 'Never let the fear of striking out keep you from playing the game.'
  },

  {'author': 'Frank Zappa', 
   'quote': 'Without deviation from the norm, progress is not possible.'
  },

  {'author': 'Will Smith', 
   'quote': 'Money and success don\'t change people; they merely amplify what is already there.'
  },

  {'author': 'George Clooney', 
   'quote': 'You never really learn much from hearing yourself speak.'
  },

  {'author': 'Mark Twain', 
   'quote': 'Good friends, good books, and a sleepy conscience: this is the ideal life.'
  },

  {'author': 'Stephen Hawking', 
   'quote': 'Life would be tragic if it weren\'t funny.'
  },
];

const quote = document.querySelector(".quoteOutput");
const copy = document.querySelector(".copy");

copy.addEventListener("click", ()=>{
  navigator.clipboard.writeText(quote.innerText);
  });

function newQuote(){
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  document.querySelector('.quoteOutput').textContent = `\"${quotes[randomNumber].quote}\"`;
  document.querySelector('.authorOutput').textContent = `- ${quotes[randomNumber].author}`;
}
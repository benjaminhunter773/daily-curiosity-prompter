async function getNewFact() {
    // Display a loading message while fetching data
    document.getElementById('fact').innerText = "Loading...";
    const button = document.querySelector("button");
    
    // Disable the button temporarily
    button.disabled = true;
  
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=1&type=boolean');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      const fact = data.results[0].question;
      
      // Display the fact and enable the button
      document.getElementById('fact').innerText = fact;
      button.disabled = false;
    } catch (error) {
      console.error("Fetch error: ", error);
      
      // Display a more casual error message
      document.getElementById('fact').innerText = "You're going too fast! Please wait a moment and try again.";
      
      // Wait 2 seconds before re-enabling the button
      setTimeout(() => {
        button.disabled = false;
      }, 2000);
    }
  }
  
  // Display a fact when the page loads
  getNewFact();
  
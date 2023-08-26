const GetWords = async () => {
    try {
      const url = `https://wordle-api.vercel.app/api/wordle`;
      const response = await fetch(url, {
        method: 'POST', // Use the POST method
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  
  GetWords();
  
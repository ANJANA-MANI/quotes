import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


function Quotegenerator() {
  const theme = useTheme();
  const [quote, setQuote] = useState([]);
  const [i, setI] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const base_url = 'https://dummyjson.com/quotes';

  const fetchData = async () => {
    try {
      const result = await fetch(base_url);
      if (!result.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await result.json();
      setQuote(data.quotes);
      selecti(1);
    } catch (error) {
      console.error('Error fetching data:', error);
      // You might want to set an error state or handle it in another way
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selecti = (a) => {
    if(a!=1)
    {setFadeIn(false); }
    // Reset the fade-in state
    setTimeout(() => {
      var min = 1;
      var max = quote.length-1;
      var number = Math.floor(Math.random() * (max - min + 1)) + min;
      setI(number);
      setFadeIn(true); // Trigger fade-in after a short delay
    }, 400);
  };

  // Check if quote array is not empty before accessing its elements
  var currentQuote = quote.length > 0 ? quote[i].quote : '';
  var currentAuthor = quote.length > 0 ? quote[i].author : '';

  return (
    <Card
      sx={{
        display: 'flex',
        marginTop:"25px",
        marginLeft: '150px',
        width: '1100px',
        height: '450px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://i.pinimg.com/1200x/4b/e0/1c/4be01c2f652b2ce1af3c88b24b9af4dc.jpg)',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', marginTop: '150px', opacity: fadeIn ? 1 : 0, transition: 'opacity 0.6s' }}>
          <Typography component="div" variant="h3" sx={{
    color: '#5D6D7E  ', // Set the desired text color
    fontFamily: 'Dancing Script', // Set the desired font family
    fontStyle: 'bold',
   // Set the desired font style
    // Add other styling properties as needed
  }}>
          <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#E59866" }} />  {currentQuote} <FontAwesomeIcon icon={faQuoteRight} style={{ color: "#E59866" }} />
          </Typography>
          <Typography variant="h3" color="text.secondary" component="div"sx={{
    color: '#A04000', // Set the desired text color
    fontFamily: 'Dancing Script', // Set the desired font family
    fontStyle: 'bold',
   // Set the desired font style
    // Add other styling properties as needed
  }}>
            -{currentAuthor}
            
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="next" onClick={selecti}  >
             <SkipNextIcon sx={{
    fontSize: '10rem', // Adjust the size as needed
    width: '4rem', // Adjust the width of the button
    height: '4rem', // Adjust the height of the button
  }}/>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default Quotegenerator;

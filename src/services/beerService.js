const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

export const fetchAllBeers = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching beers:', error);
  }
};

export const fetchSingleBeer = async (beerId) => {
  try {
    const response = await fetch(`${API_URL}/${beerId}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching beer:', error);
  }
};

export const fetchRandomBeer = async () => {
  try {
    const response = await fetch(`${API_URL}/random`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching random beer:', error);
  }
};

export const createNewBeer = async (beerData) => {
  try {
    const response = await fetch(`${API_URL}/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(beerData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating new beer:', error);
  }
};

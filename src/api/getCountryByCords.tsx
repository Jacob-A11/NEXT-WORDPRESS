const getCountryByCords = async () => {
  interface Position {
    coords: {
      latitude: number;
      longitude: number;
    };
  }
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
      'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
    },
  };
  let result;
  if ('geolocation' in navigator) {
    const position = await new Promise<Position>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    result = await fetch(
      `https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${lat}&lon=${lon}&accept-language=en&polygon_threshold=0.0`,
      options
    ).then((response) => response.json());
  }
  return result;
};

export default getCountryByCords;

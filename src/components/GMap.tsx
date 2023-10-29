import { Box } from '@chakra-ui/react';

const GMap = () => {
  const googleMapStyle: React.CSSProperties = {
    width: '100%',
    height: '356px',
  };

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const defaultLatitude: number = -8.910941264763466;
  const defaultLongitude: number = -35.719276961969825;

  return (
    <Box mt={8}>
      <iframe
        title='Google Map'
        src={`https://www.google.com/maps/embed/v1/place?q=${defaultLatitude},${defaultLongitude}&key=${apiKey}`}
        allowFullScreen
        style={googleMapStyle}
      />
    </Box>
  );
};

export default GMap;

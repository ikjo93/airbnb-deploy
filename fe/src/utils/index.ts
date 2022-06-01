export const getGeoLocation = () => {
  return new Promise((res, rej) => {
    if (!navigator.geolocation) {
      rej('GPS 미지원');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        res(position);
      },
      (error) => {
        rej(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      },
    );
  });
};

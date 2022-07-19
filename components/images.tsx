// import useSwr from 'swr';

//data
// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// function usePhotos() {
//   const {
//     data: { photos },
//     error,
//   } = useSwr('/api/get-photos', fetcher);

//   return {
//     photos,
//     isLoading: !error && !photos,
//     isError: error,
//   };
// }

export const Images = () => {
  // const { photos, isLoading, isError } = usePhotos();

  // console.log(photos, 'photos');

  return (
    <div>
      {/* {isError && <div>failed to load</div>}
      {isLoading && <div>loading...</div>} */}
      {/* <Image src={photos.urls.small} alt="Dan Abramov" /> */}
      {/* {photos &&
        photos.map((photo, index) => {
          console.log(photo.urls.small);
          return (
            <Box boxSize="sm" key={index}>
              <Image src={photo.urls.small} alt="Dan Abramov" />
            </Box>
          );
        })} */}
    </div>
  );
};

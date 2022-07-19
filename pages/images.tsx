//components
import { Navbar } from '../components/navbar';

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

export default function Home() {
  // const { photos, isLoading, isError } = usePhotos();
  return (
    <div>
      <Navbar />
      {/* <Images /> */}
    </div>
  );
}

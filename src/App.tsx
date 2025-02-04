import { useGetImagesQuery } from '@/redux/slices/imagesSlice.ts';

function App() {
  const { data } = useGetImagesQuery();
  console.log(data);
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </>
  );
}

export default App;

import { Button } from '@/components/ui/button.tsx';
import { useGetImagesQuery } from '@/redux/slices/imagesSlice.ts';

function App() {
  const { data } = useGetImagesQuery();
  console.log(data);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
    </>
  );
}

export default App;

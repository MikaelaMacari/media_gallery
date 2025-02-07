import Layout from '@/layout';
import Home from '@/pages/home';
import { useGetImagesQuery } from '@/redux/slices/imagesSlice.ts';

const App = () => {
  const { data } = useGetImagesQuery();
  console.log(data);
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;

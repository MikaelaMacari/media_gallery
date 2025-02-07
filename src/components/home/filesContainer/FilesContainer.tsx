import FileCard from './fileCard';

const files = [
  {
    id: 1,
    name: 'this is a long long name of the image',
    url: 'https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Image 2',
    url: 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    name: 'Image 3',
    url: 'https://media.istockphoto.com/id/2164609170/photo/scenic-view-of-path-in-mountains-against-clear-sky-during-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=IVR0EsOSjvPbxRQ7T4JjGCZxGH2XVuTQsjtrIVQ14kw=',
  },
  {
    id: 4,
    name: 'Image 4',
    url: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 5,
    name: 'Image 5',
    url: 'https://images.unsplash.com/photo-1506057213367-028a17ec52e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 6,
    name: 'Image 6',
    url: 'https://images.unsplash.com/photo-1511362871732-aa290076bfe2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 7,
    name: 'Image 7',
    url: 'https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    name: 'Image 8',
    url: 'https://images.unsplash.com/photo-1485204261646-2e9f783c88cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 9,
    name: 'Image 9',
    url: 'https://images.unsplash.com/photo-1539634262233-7c0b48ab9503?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 10,
    name: 'Image 10',
    url: 'https://images.unsplash.com/photo-1522140607231-7c05952eb779?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 11,
    name: 'Image 11',
    url: 'https://images.unsplash.com/photo-1536772189060-e85a9098f282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 12,
    name: 'Image 12',
    url: 'https://images.unsplash.com/photo-1539470090907-7cc242c37af5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 13,
    name: 'Image 13',
    url: 'https://plus.unsplash.com/premium_photo-1719930222484-86600f8c74da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 14,
    name: 'Image 14',
    url: 'https://plus.unsplash.com/premium_photo-1719943510871-7831aeef9ab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 15,
    name: 'Image 15',
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 16,
    name: 'Image 16',
    url: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 17,
    name: 'Image 17',
    url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 18,
    name: 'Image 18',
    url: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 19,
    name: 'Image 19',
    url: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 20,
    name: 'Image 20',
    url: 'https://plus.unsplash.com/premium_photo-1709492256360-d687231714db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 21,
    name: 'Image 21',
    url: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 22,
    name: 'Image 22',
    url: 'https://plus.unsplash.com/premium_photo-1669218058060-fe92956306cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ3fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 23,
    name: 'Image 23',
    url: 'https://images.unsplash.com/photo-1479030160180-b1860951d696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ5fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 24,
    name: 'Image 24',
    url: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY5fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 25,
    name: 'Image 25',
    url: 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg3fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D',
  },
];
const FilesContainer = () => (
  <div className="h-svh">
    <div className="flex flex-wrap gap-4">
      {files.map((item) => {
        return (
          <FileCard
            key={item.id}
            url={item.url}
            name={item.name}
            index={item.id}
          />
        );
      })}
    </div>
  </div>
);

export default FilesContainer;

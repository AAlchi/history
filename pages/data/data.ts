interface Item {
  id: number;
  title: string;
  desc: string;
  image: string;
}

interface Data {
  featured: Item[];
}

const data: Data = {
  featured: [
    {
      id: 1,
      title: "Name 1",
      desc: "Desc",
      image: "/History-banner.jpg",
    },
    {
      id: 2,
      title: "Name 2",
      desc: "Desc",
      image: "/History-banner.jpg",
    },
    {
      id: 3,
      title: "Name 3",
      desc: "Desc",
      image: "/History-banner.jpg",
    },
  ],
};

export default data;

import img1 from "./assets/carImages/b-1.png";

const delay = (time) => {
  setTimeout(() => {}, time);
};

export const getItems = async () => {
  return [
    {
      id: 1,
      title: "گوشی اپل",
      price: 120000000,
      image: img1,
    },
  ];
};

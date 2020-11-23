const ENDPOINT =
  "https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json";

const getDataFromAPI = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.cart.items.map((cart) => {
        return {
          name: cart.name,
          description: cart.description,
          url: cart.imageUrl,
          price: cart.price,
          sizes: cart.sizes,
        };
      });
    });
};

export default getDataFromAPI;

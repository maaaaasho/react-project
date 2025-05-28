import { FaAppleAlt, FaLaptop, FaShoePrints, FaTshirt } from "react-icons/fa";

export const DATA = {
  categories: [
    { id: 'clothing', name: 'Clothing', icon: FaTshirt },
    { id: 'electronics', name: 'Electronics', icon: FaLaptop },
    { id: 'fruits', name: 'Fruits', icon: FaAppleAlt },
    { id: 'shoes', name: 'Shoes', icon: FaShoePrints },
  ],
  products: {
    clothing: [
      {
        id: 'shirt1',
        name: 'Casual Shirt',
        price: 29.99,
        description: 'Comfortable casual shirt made of cotton fabric.',
        image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?&auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'jeans1',
        name: 'Blue Jeans',
        price: 49.99,
        description: 'Stylish blue denim jeans with a slim fit.',
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?&auto=format&fit=crop&w=600&q=80'
      },
    ],
    electronics: [
      {
        id: 'laptop1',
        name: 'Laptop Pro',
        price: 999.99,
        description: 'High performance laptop with latest specs.',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?&auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'headset1',
        name: 'Wireless Headset',
        price: 199.99,
        description: 'Noise cancelling wireless headset for immersive sound.',
        image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?&auto=format&fit=crop&w=600&q=80'
      }
    ],
    fruits: [
      {
        id: 'apple1',
        name: 'Red Apple',
        price: 0.99,
        description: 'Fresh and crisp red apple.',
        image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?&auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'banana1',
        name: 'Yellow Banana',
        price: 0.69,
        description: 'Sweet ripe bananas full of potassium.',
        image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e39e?&auto=format&fit=crop&w=600&q=80'
      }
    ],
    shoes: [
        {
        "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        "category": "Men's Sneaker",
        "name": "ULTRABOOST 22 SHOES",
        "seller": "Addidas",
        "price": 420,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3725,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
        // "shipping": 1,
        // "quantity": 0
    },
    {
        "id": "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        "category": "Men's Sneaker",
        "name": "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
        "seller": "Addidas",
        "price": 196,
        "stock": 19,
        "ratings": 5,
        "ratingsCount": 4355,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
        // "shipping": 14,
        // "quantity": 0
    },
    {
        "id": "307f166f-1d04-4573-bc37-2f461ea9d4f7",
        "category": "Men's Sneaker",
        "name": "SUPERNOVA SHOES",
        "seller": "Addidas",
        "price": 245,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3972,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
        // "shipping": 1,
        // "quantity": 0
    },
    {
        "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        "category": "Men's Sneaker",
        "name": "LITE RACER ADAPT 3.0 SHOES",
        "seller": "Addidas",
        "price": 229,
        "stock": 10,
        "ratings": 5,
        "ratingsCount": 1764,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
        // "shipping": 32,
        // "quantity": 0
    },
    {
        "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
        "category": "Men's Sneaker",
        "name": "4DFWD SHOES",
        "seller": "Addidas",
        "price": 287,
        "stock": 11,
        "ratings": 4,
        "ratingsCount": 799,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
        // "shipping": 49,
        // "quantity": 0
    },
    {
        "id": "6e5593d3-557b-43cf-8dab-a5140faedfb0",
        "category": "Men's Sneaker",
        "name": "KAPTIR 2.0 SHOES",
        "seller": "Addidas",
        "price": 138,
        "stock": 19,
        "ratings": 3,
        "ratingsCount": 4372,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
        // "shipping": 19,
        // "quantity": 0
    },
    ]
  }
};
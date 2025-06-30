const MOCKED_PRODUCTS = [
  {
    id: "1",
    name: "Silky Straight Human Hair Wig",
    category: "Lace Front Wigs",
    imageUrls: [
      "https://i.pinimg.com/736x/f7/6b/2d/f76b2d9c977f93153313dc933bb1457d.jpg",
      "https://i.pinimg.com/736x/f7/6b/2d/f76b2d9c977f93153313dc933bb1457d.jpg",
      "https://i.pinimg.com/736x/f7/6b/2d/f76b2d9c977f93153313dc933bb1457d.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    description:
      "Experience luxury with our silky straight human hair wig. Made from 100% virgin human hair, it offers a natural look and feel. Perfect for any occasion, easy to style and maintain.",
    originalPrice: 250000,
    salePrice: 250000,
    reviews: [
      {
        rating: 5,
        comment: "Absolutely love this wig! So soft and natural looking.",
        user: "Sarah K.",
      },
      {
        rating: 4,
        comment:
          "Great quality for the price. Minor shedding but nothing major.",
        user: "Jessica L.",
      },
    ],
    attributes: {
      hairType: "Human Hair",
      texture: "Straight",
      wigType: "Lace Front",
      length: ["14", "16", "18", "20", "22", "24"], // Inches
      color: ["Natural Black", "Burgundy", "Blonde"],
      density: ["150%", "180%", "200%"],
      laceColor: "Medium Brown",
      bleachedKnots: "Yes",
      prePlucked: "Yes",
    },
    variations: [
      {
        length: "14",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://i.pinimg.com/736x/75/0a/88/750a8802a980cb46050affa94e53b2a1.jpg",
      },
      {
        length: "16",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/FFD1DC/333333?text=Wig+1_16_NB_150",
      },
      {
        length: "18",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/FFD1DC/333333?text=Wig+1_18_NB_150",
      },
      {
        length: "20",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/FFD1DC/333333?text=Wig+1_20_NB_150",
      },
      {
        length: "22",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/FFD1DC/333333?text=Wig+1_22_NB_150",
      },
      {
        length: "24",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/FFD1DC/333333?text=Wig+1_24_NB_150",
      },
      // Other variations...
      {
        length: "18",
        color: "Blonde",
        density: "180%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/F0E68C/333333?text=Wig+1_18_Blonde_180",
      },
    ],
  },
  {
    id: "2",
    name: "Deep Wave Virgin Hair Wig",
    category: "Full Lace Wigs",
    imageUrls: [
      "https://i.pinimg.com/736x/75/0a/88/750a8802a980cb46050affa94e53b2a1.jpg",
      "https://i.pinimg.com/736x/75/0a/88/750a8802a980cb46050affa94e53b2a1.jpg",
    ],
    videoUrl: "",
    description:
      "Achieve a glamorous look with our deep wave virgin hair wig. Its natural luster and bounce make it a stunning choice for those who love volume and texture.",
    originalPrice: 250000,
    salePrice: 250000,
    reviews: [
      {
        rating: 5,
        comment: "Beautiful waves! Received so many compliments.",
        user: "Emily R.",
      },
    ],
    attributes: {
      hairType: "Virgin Hair",
      texture: "Deep Wave",
      wigType: "Full Lace",
      length: ["16", "18", "20", "22"],
      color: ["Natural Black"],
      density: ["180%", "200%"],
      laceColor: "Transparent",
      bleachedKnots: "No",
      prePlucked: "Yes",
    },
    variations: [
      {
        length: "16",
        color: "Natural Black",
        density: "180%",
        price: 250000,
        imageUrl:
          "https://i.pinimg.com/736x/75/0a/88/750a8802a980cb46050affa94e53b2a1.jpg",
      },
      {
        length: "20",
        color: "Natural Black",
        density: "200%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/ADD8E6/333333?text=Wig+2_20_NB_200",
      },
    ],
  },
  {
    id: "3",
    name: "Kinky Curly Headband Wig",
    category: "Headband Wigs",
    imageUrls: [
      "https://placehold.co/600x600/DDA0DD/333333?text=Wig+3a",
      "https://placehold.co/600x600/BA55D3/333333?text=Wig+3b",
    ],
    videoUrl: "",
    description:
      "Effortless style with our kinky curly headband wig. Perfect for beginners and quick hairstyles. No lace, no glue, just put it on and go!",
    originalPrice: 250000,
    salePrice: 250000,
    reviews: [
      {
        rating: 4,
        comment: "So easy to wear! The curls are bouncy.",
        user: "Linda P.",
      },
    ],
    attributes: {
      hairType: "Remy Hair",
      texture: "Kinky Curly",
      wigType: "Headband Wig",
      length: ["12", "14", "16"],
      color: ["Natural Black"],
      density: ["150%"],
      laceColor: "N/A",
      bleachedKnots: "N/A",
      prePlucked: "N/A",
    },
    variations: [
      {
        length: "14",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/DDA0DD/333333?text=Wig+3_14_NB_150",
      },
    ],
  },
  {
    id: "4",
    name: "Body Wave Lace Front Wig",
    category: "Lace Front Wigs",
    imageUrls: [
      "https://placehold.co/600x600/F0F8FF/333333?text=Wig+4a",
      "https://placehold.co/600x600/E0FFFF/333333?text=Wig+4b",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Get natural looking waves with our body wave lace front wig. This versatile wig can be styled straight or curled for different looks.",
    originalPrice: 250000,
    salePrice: 250000,
    reviews: [
      {
        rating: 5,
        comment: "Love the body and bounce of this wig!",
        user: "Olivia M.",
      },
      {
        rating: 4,
        comment: "Good quality, natural hairline.",
        user: "Sophia G.",
      },
    ],
    attributes: {
      hairType: "Human Hair",
      texture: "Body Wave",
      wigType: "Lace Front",
      length: ["16", "18", "20", "22", "24"],
      color: ["Natural Black", "Dark Brown"],
      density: ["150%", "180%"],
      laceColor: "Light Brown",
      bleachedKnots: "Yes",
      prePlucked: "Yes",
    },
    variations: [
      {
        length: "18",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/F0F8FF/333333?text=Wig+4_18_NB_150",
      },
      {
        length: "22",
        color: "Dark Brown",
        density: "180%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/F0F8FF/333333?text=Wig+4_22_DB_180",
      },
    ],
  },
  {
    id: "5",
    name: "Afro Kinky Curly Wig",
    category: "Lace Front Wigs",
    imageUrls: [
      "https://placehold.co/600x600/FAEBD7/333333?text=Wig+5a",
      "https://placehold.co/600x600/F5DEB3/333333?text=Wig+5b",
    ],
    videoUrl: "",
    description:
      "Embrace your natural texture with our vibrant Afro kinky curly wig. Full of volume and bounce, this wig offers a bold and beautiful look.",
    originalPrice: 250000,
    salePrice: 250000,
    reviews: [
      {
        rating: 5,
        comment: "My favorite wig! Looks so real and easy to maintain.",
        user: "Chloe W.",
      },
    ],
    attributes: {
      hairType: "Human Hair",
      texture: "Afro Kinky Curly",
      wigType: "Lace Front",
      length: ["10", "12", "14"],
      color: ["Natural Black"],
      density: ["150%"],
      laceColor: "Medium Brown",
      bleachedKnots: "No",
      prePlucked: "Yes",
    },
    variations: [
      {
        length: "12",
        color: "Natural Black",
        density: "150%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/FAEBD7/333333?text=Wig+5_12_NB_150",
      },
    ],
  },
  {
    id: "6",
    name: "Blonde Bob Wig",
    category: "Bob Wigs",
    imageUrls: [
      "https://placehold.co/600x600/F0E68C/333333?text=Wig+6a",
      "https://placehold.co/600x600/FFFACD/333333?text=Wig+6b",
    ],
    videoUrl: "",
    description:
      "Achieve a chic and stylish look with our trendy blonde bob wig. Perfect for a fresh, modern appearance.",
    originalPrice: 250000,
    salePrice: 250000,
    reviews: [
      {
        rating: 4,
        comment: "Love the color and style. A bit thin at the back.",
        user: "Megan S.",
      },
    ],
    attributes: {
      hairType: "Human Hair",
      texture: "Straight",
      wigType: "Bob Wig",
      length: ["10", "12"],
      color: ["613 Blonde"],
      density: ["130%"],
      laceColor: "Transparent",
      bleachedKnots: "Yes",
      prePlucked: "Yes",
    },
    variations: [
      {
        length: "12",
        color: "613 Blonde",
        density: "130%",
        price: 250000,
        imageUrl:
          "https://placehold.co/600x600/F0E68C/333333?text=Wig+6_12_Blonde_130",
      },
    ],
  },
];

const MOCKED_USERS = [
  {
    email: "user@example.com",
    password: "password123",
    name: "WigLover",
  },
];

const MOCKED_ORDERS = [
  {
    id: "ORD001",
    date: "2023-01-15",
    status: "Delivered",
    total: 219.99,
    items: [
      {
        name: 'Silky Straight Human Hair Wig (16", Natural Black, 150%)',
        quantity: 1,
        price: 219.99,
      },
    ],
    shippingAddress: "123 Wig St, Hairville, CA 90210",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD002",
    date: "2023-03-20",
    status: "Processing",
    total: 150.0,
    items: [
      {
        name: 'Kinky Curly Headband Wig (14", Natural Black, 150%)',
        quantity: 1,
        price: 150.0,
      },
    ],
    shippingAddress: "123 Wig St, Hairville, CA 90210",
    paymentMethod: "PayPal",
  },
];

// Add navigation handler for new dynamic loader
function navigateTo(section) {
  loadSection(section);
}

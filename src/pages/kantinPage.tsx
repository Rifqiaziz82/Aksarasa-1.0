import { useState } from 'react';
import { Heart, Star, Plus, Minus, ShoppingCart } from 'lucide-react';
import Header from '@/components/header';

// Sample data makanan kantin
const foodData = [
  {
    id: 1,
    name: "Nasi Gudeg",
    description: "Nasi gudeg khas Yogya dengan ayam kampung dan telur",
    price: 15000,
    originalPrice: 18000,
    rating: 4.8,
    reviews: 124,
    image: "https://www.tokomesin.com/wp-content/uploads/2015/09/gudeg-tokomesin.jpg",
    category: "Makanan Berat",
    isPopular: true,
    stock: 15
  },
  {
    id: 2,
    name: "Bakso Malang",
    description: "Bakso sapi asli dengan mie kuning dan pangsit goreng",
    price: 12000,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
    category: "Makanan Berat",
    stock: 8
  },
  {
    id: 3,
    name: "Gado-gado",
    description: "Gado-gado segar dengan bumbu kacang homemade",
    price: 10000,
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
    category: "Makanan Sehat",
    stock: 12
  },
  {
    id: 4,
    name: "Es Teh Manis",
    description: "Es teh manis segar untuk menemani makan siang",
    price: 3000,
    rating: 4.3,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop",
    category: "Minuman",
    stock: 25
  },
  {
    id: 5,
    name: "Ayam Geprek",
    description: "Ayam crispy geprek dengan sambal level sedang",
    price: 14000,
    originalPrice: 16000,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&h=200&fit=crop",
    category: "Makanan Berat",
    isPopular: true,
    stock: 6
  },
  {
    id: 6,
    name: "Pisang Goreng",
    description: "Pisang goreng crispy dengan taburan gula halus",
    price: 5000,
    rating: 4.4,
    reviews: 78,
    image: "https://fibercreme.com/wp-content/uploads/2025/06/Header-3.webp",
    category: "Snack",
    stock: 20
  }
];

function FoodCard({ food }:{food:any;}) {
  const [quantity, setQuantity] = useState(0);
  const [isLiked, setIsLiked] = useState(false);


  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase' && quantity < food.stock) {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {food.isPopular && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Popular
          </div>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isLiked 
              ? 'bg-red-500 text-white scale-110' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:scale-105'
          }`}
        >
          <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
        
        {/* Stock indicator */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs">
          Stok: {food.stock}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Category */}
        <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium mb-2">
          {food.category}
        </span>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 mb-2">{food.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{food.description}</p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-semibold text-gray-900">{food.rating}</span>
          </div>
          <span className="text-gray-500 text-xs ml-2">({food.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-red-600">{formatPrice(food.price)}</span>
            {food.originalPrice && (
              <span className="text-sm text-gray-400 line-through">{formatPrice(food.originalPrice)}</span>
            )}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center justify-between">
          {quantity === 0 ? (
            <button
              onClick={() => handleQuantityChange('increase')}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              disabled={food.stock === 0}
            >
              <ShoppingCart size={16} />
              <span>Tambah</span>
            </button>
          ) : (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <Minus size={16} className="text-red-500" />
                </button>
                <span className="font-semibold text-gray-900 min-w-[20px] text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                  disabled={quantity >= food.stock}
                >
                  <Plus size={16} className="text-red-500" />
                </button>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200">
                <ShoppingCart size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function KantinPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const categories = ['Semua', 'Makanan Berat', 'Makanan Sehat', 'Minuman', 'Snack'];
  
  const filteredFood = selectedCategory === 'Semua' 
    ? foodData 
    : foodData.filter(food => food.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <Header Name="Kantin"/>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Category Filter */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFood.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {filteredFood.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Tidak ada makanan dalam kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default KantinPage;
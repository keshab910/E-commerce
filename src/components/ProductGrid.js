import React, { useState } from 'react';
import {  Filter } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';

const ProductGrid = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [productsToShow, setProductsToShow] = useState(12);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Reset products to show when category or sort changes
  React.useEffect(() => {
    setProductsToShow(12);
  }, [selectedCategory, sortBy]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Smart Fan",
      price: 89.99,
      originalPrice: 129.99,
      image: "http://us.switch-bot.com/cdn/shop/files/CirculatorFanGlobal_1200x1200.png?v=1712470901",
      category: "electronics",
      rating: 4.8,
      reviews: 124,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Premium Coffee Maker",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://static-01.daraz.com.np/p/ed8cdc4b9b9c96cbfcf482cb28b29aaa.jpg",
      category: "home",
      rating: 4.6,
      reviews: 89,
      isNew: false,
      isSale: true
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 299.99,
      originalPrice: 299.99,
      image: "https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_SL1500_.jpg",
      category: "electronics",
      rating: 4.9,
      reviews: 256,
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://marksandspencer.com.ph/cdn/shop/products/SD_03_T28_5381M_UT_X_EC_94.jpg?v=1674098797",
      category: "clothing",
      rating: 4.5,
      reviews: 67,
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: "Designer Sunglasses",
      price: 159.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.7,
      reviews: 143,
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://fotografias.larazon.es/clipping/cmsimages01/2025/05/02/C539526F-A93A-4B83-987F-76ABF6570533/jbl-boombox-3_69.jpg?crop=1900,1069,x0,y0&width=1280&height=720&optimize=low&format=webply",
      category: "electronics",
      rating: 4.4,
      reviews: 98,
      isNew: false,
      isSale: true
    },
    {
      id: 7,
      name: "Leather Crossbody Bag",
      price: 89.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.6,
      reviews: 112,
      isNew: true,
      isSale: false
    },
    {
      id: 8,
      name: "Smart Home Security Camera",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://img.drz.lazcdn.com/static/np/p/ed70624e77fc8659ebdc0aab6f41d410.jpg_720x720q80.jpg",
      category: "home",
      rating: 4.8,
      reviews: 203,
      isNew: false,
      isSale: true
    },
    {
      id: 9,
      name: "Gaming Laptop",
      price: 1299.99,
      originalPrice: 1499.99,
      image: "https://static.digit.in/default/6c01a959acf85fd8dfb4299b2175d1f1739ef6fd.jpeg",
      category: "electronics",
      rating: 4.9,
      reviews: 342,
      isNew: true,
      isSale: true
    },
    {
      id: 10,
      name: "Denim Jeans",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      category: "clothing",
      rating: 4.3,
      reviews: 89,
      isNew: false,
      isSale: true
    },
    {
      id: 11,
      name: "Smartphone",
      price: 799.99,
      originalPrice: 899.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.7,
      reviews: 567,
      isNew: true,
      isSale: true
    },
    {
      id: 12,
      name: "Running Shoes",
      price: 119.99,
      originalPrice: 149.99,
      image: "https://images.ctfassets.net/hnk2vsx53n6l/1KyjmBxQL5ualwU93ObQAm/671ca49ff731cedb953b0e4868f5ea31/iajuu8ikqid7v2xoyagn.png?fm=webp",
      category: "clothing",
      rating: 4.6,
      reviews: 234,
      isNew: false,
      isSale: true
    },
    {
      id: 13,
      name: " Earbuds",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.8,
      reviews: 189,
      isNew: true,
      isSale: true
    },
    {
      id: 14,
      name: "Kitchen Mixer",
      price: 299.99,
      originalPrice: 349.99,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      category: "home",
      rating: 4.5,
      reviews: 156,
      isNew: false,
      isSale: true
    },
    {
      id: 15,
      name: "Leather Wallet",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.4,
      reviews: 78,
      isNew: false,
      isSale: true
    },
    {
      id: 16,
      name: "Tablet",
      price: 399.99,
      originalPrice: 499.99,
      image: "https://m.media-amazon.com/images/I/71g4q3K+0qL.jpg",
      category: "electronics",
      rating: 4.6,
      reviews: 298,
      isNew: true,
      isSale: true
    },
    {
      id: 17,
      name: "Hoodie",
      price: 45.99,
      originalPrice: 59.99,
      image: "http://equestrianstockholm.com/cdn/shop/files/Ease-hoodie-navy-men.jpg?v=1713957759",
      category: "clothing",
      rating: 4.2,
      reviews: 134,
      isNew: false,
      isSale: true
    },
    {
      id: 18,
      name: "Smart TV",
      price: 699.99,
      originalPrice: 899.99,
      image: "https://www.cnet.com/a/img/resize/19cd9565954b38cacb5e45faae57c19aac1b3085/hub/2023/04/06/0a2ae837-174a-468e-a91c-acaffaeaa1f9/roku-tv-23-06.jpg?auto=webp&fit=crop&height=675&width=1200",
      category: "electronics",
      rating: 4.8,
      reviews: 445,
      isNew: true,
      isSale: true
    },
    {
      id: 19,
      name: "Garden Planters Set",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
      category: "home",
      rating: 4.3,
      reviews: 67,
      isNew: false,
      isSale: true
    },
    {
      id: 20,
      name: "Diamond Ring",
      price: 1299.99,
      originalPrice: 1599.99,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isSale: true
    },
    {
      id: 21,
      name: "Wireless Mouse",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.4,
      reviews: 234,
      isNew: false,
      isSale: true
    },
    {
      id: 22,
      name: "Summer Dress",
      price: 69.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      category: "clothing",
      rating: 4.5,
      reviews: 156,
      isNew: true,
      isSale: true
    },
    {
      id: 23,
      name: "Study Lamp",
      price: 18.99,
      originalPrice: 24.99,
      image: "https://nephot.com/wp-content/uploads/2023/07/Rechargeable-LED-Desk-Lamp-Touch-Control-Night-Lamp-for-Student.png",
      category: "home",
      rating: 4.7,
      reviews: 189,
      isNew: false,
      isSale: true
    },
    {
      id: 24,
      name: "Mechanical Keyboard",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.6,
      reviews: 298,
      isNew: true,
      isSale: true
    },
    {
      id: 25,
      name: "Wireless Charger",
      price: 29.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.3,
      reviews: 156,
      isNew: false,
      isSale: true
    },
    {
      id: 26,
      name: "Yoga Mat",
      price: 34.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
      category: "home",
      rating: 4.5,
      reviews: 234,
      isNew: false,
      isSale: true
    },
    {
      id: 27,
      name: "Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
      category: "clothing",
      rating: 4.4,
      reviews: 189,
      isNew: false,
      isSale: true
    },
    {
      id: 28,
      name: "Smart Thermostat",
      price: 179.99,
      originalPrice: 229.99,
      image: "data:image/jpeg;base64,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",
      category: "home",
      rating: 4.6,
      reviews: 145,
      isNew: true,
      isSale: true
    },
    {
      id: 29,
      name: "Bluetooth Headset",
      price: 69.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.2,
      reviews: 98,
      isNew: false,
      isSale: true
    },
    {
      id: 30,
      name: "Formal Shirt",
      price: 54.99,
      originalPrice: 74.99,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      category: "clothing",
      rating: 4.3,
      reviews: 112,
      isNew: false,
      isSale: true
    },
    {
      id: 31,
      name: "Smart Doorbell",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/E1F2/production/_111124875_mediaitem111121819.jpg",
      category: "home",
      rating: 4.7,
      reviews: 203,
      isNew: true,
      isSale: true
    },
    {
      id: 32,
      name: "Gaming microphone",
      price: 64.99,
      originalPrice: 99.99,
      image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:262,cw:675,ch:675,q:80,w:675/PxNMbJZVwCHCdjyq8By7TX.png",
      category: "electronics",
      rating: 4.5,
      reviews: 267,
      isNew: false,
      isSale: true
    },
    {
      id: 33,
      name: "Winter Jacket",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      category: "clothing",
      rating: 4.6,
      reviews: 178,
      isNew: true,
      isSale: true
    },
    {
      id: 34,
      name: "Trimer",
      price: 8.99,
      originalPrice: 16.99,
      image: "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHfeba0b7eb24044fa8188750372f7ae9cS.jpg_480x480.jpg",
      category: "electronics",
      rating: 4.4,
      reviews: 134,
      isNew: false,
      isSale: true
    },
    {
      id: 35,
      name: "Fitness Tracker",
      price: 99.99,
      originalPrice: 149.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.3,
      reviews: 223,
      isNew: false,
      isSale: true
    },
    {
      id: 36,
      name: "Casual Blazer",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=400&fit=crop",
      category: "clothing",
      rating: 4.4,
      reviews: 95,
      isNew: false,
      isSale: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest First' }
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.isNew - a.isNew;
        default:
          return 0;
      }
    });

  // Get products to display based on productsToShow state
  const displayedProducts = filteredProducts.slice(0, productsToShow);

  // Handle load more
  const handleLoadMore = () => {
    setProductsToShow(prev => prev + 12);
  };

  // Handle show less (go back to previous page)
  const handleShowLess = () => {
    setProductsToShow(prev => Math.max(12, prev - 12));
  };

  // Check if there are more products to load
  const hasMoreProducts = productsToShow < filteredProducts.length;
  
  // Check if we can show less (go back)
  const canShowLess = productsToShow > 12;

  // Handle view product details
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setDetailModalOpen(true);
  };

  // Handle close detail modal
  const handleCloseDetailModal = () => {
    setDetailModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked collection of premium products designed to enhance your lifestyle
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        {/* Category Filter */}
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {/* Load More and Show Less Buttons */}
      <div className="text-center mt-12 space-y-4">
        {hasMoreProducts && (
          <button 
            onClick={handleLoadMore}
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Load More Products
          </button>
        )}
        
        {canShowLess && (
          <div className="flex justify-center">
            <button 
              onClick={handleShowLess}
              className="bg-gray-500 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-600 transition-colors"
            >
              ← Show Less (Back to Previous Page)
            </button>
          </div>
        )}
        
        {/* No More Products Message */}
        {!hasMoreProducts && filteredProducts.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-600 text-lg">
              You've seen all {filteredProducts.length} products in this category!
            </p>
            {canShowLess && (
              <p className="text-gray-500 text-sm mt-2">
                Use the "Show Less" button above to go back to previous pages
              </p>
            )}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        isOpen={detailModalOpen}
        onClose={handleCloseDetailModal}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default ProductGrid; 
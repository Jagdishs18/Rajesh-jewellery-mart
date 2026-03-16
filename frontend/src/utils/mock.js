import { Shield, Award, Sparkles } from 'lucide-react';

export const mockData = {
  images: {
    hero: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba',
    craftsmanship: 'https://images.unsplash.com/photo-1758995116121-60090f17ae20'
  },
  
  collections: [
    {
      name: 'Gold Necklaces',
      description: 'Exquisite traditional and contemporary designs',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed'
    },
    {
      name: 'Diamond Rings',
      description: 'Stunning engagement and wedding rings',
      image: 'https://images.unsplash.com/photo-1747116404311-55f8d8944e83'
    },
    {
      name: 'Gold Earrings',
      description: 'Elegant earrings for every occasion',
      image: 'https://images.unsplash.com/photo-1671644730555-916aa8d8157f'
    },
    {
      name: 'Traditional Bangles',
      description: 'Timeless bangles and bracelets',
      image: 'https://images.unsplash.com/photo-1690175867343-2af70ea57537'
    }
  ],
  
  features: [
    {
      icon: Shield,
      title: 'Certified Quality',
      description: 'All our jewellery is hallmarked and comes with authenticity certificates'
    },
    {
      icon: Award,
      title: 'Trusted Since 1990',
      description: 'Over 30 years of excellence in fine jewellery craftsmanship'
    },
    {
      icon: Sparkles,
      title: 'Lifetime Support',
      description: 'Free cleaning, maintenance, and exchange services for lifetime'
    }
  ]
};

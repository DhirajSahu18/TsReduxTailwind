export function getCategoryBackgroundColor(category : string) {
    switch (category.toLowerCase()) {
      case 'technical':
        return 'bg-blue-500';
      case 'cultural':
        return 'bg-green-500';
      case 'sports':
        return 'bg-orange-500';
      case 'workshops':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  }
export interface MenuItem {
  name: string;
  price: string;
  image: string;
  description: string;
  descriptionAr: string;
  badge?: string;
}

export interface FamilyMeal {
  title: string;
  quantity: string;
  quantityAr: string;
  price: string;
}

export interface AddOn {
  title: string;
  titleAr: string;
  price: string;
}

export const comboItems: MenuItem[] = [
  {
    name: 'Halal Box Chicken',
    price: '4.50 JD',
    image: 'assets/images/combo-chicken.png',
    description: 'Tender chicken over rice with salad, sauce and fresh toppings.',
    descriptionAr: 'دجاج طري فوق الأرز مع السلطة والصوص والإضافات الطازجة.',
    badge: 'Popular'
  },
  {
    name: 'Halal Box Beef',
    price: '5.50 JD',
    image: 'assets/images/combo-beef.png',
    description: 'Juicy beef bowl with fresh lettuce, bread pieces and signature sauce.',
    descriptionAr: 'بول لحم بقري طازج مع الخس الطازج وقطع الخبز وصوصنا المميز.'
  },
  {
    name: 'Halal Box Mix',
    price: '4.00 JD',
    image: 'assets/images/combo-mix.png',
    description: 'A mixed bowl with rich flavors, crisp veggies and creamy sauce.',
    descriptionAr: 'بول مكسّر بنكهات غنية وخضروات مقرمشة وصوص كريمي لذيذ.'
  },
  {
    name: 'Halal Box Shrimp',
    price: '8.50 JD',
    image: 'assets/images/combo-shrimp.png',
    description: 'Shrimp rice bowl with corn, herbs and delicious seafood flavor.',
    descriptionAr: 'بول أرز بالروبيان مع الذرة والأعشاب ونكهة البحر الرائعة.'
  },
  {
    name: 'Halal Box Brisket',
    price: '7.50 JD',
    image: 'assets/images/combo-brisket.png',
    description: 'Slow-cooked brisket bowl served over spiced rice and garnishes.',
    descriptionAr: 'بول برسيكت مطبوخ ببطء فوق أرز متبل مع الإضافات اللذيذة.',
    badge: 'Best Seller'
  },
  {
    name: 'Halal Box Rizo',
    price: '3.50 JD',
    image: 'assets/images/combo-rizo.png',
    description: 'Creamy rizo bowl topped with sauce and a bold, comforting flavor.',
    descriptionAr: 'بول ريزو كريمي مع الصوص ونكهة جريئة ومريحة تملأ القلب.'
  }
];

export const familyMeals: FamilyMeal[] = [
  {
    title: 'Halal Box Brisket',
    quantity: '1 Kilo',
    quantityAr: '١ كيلو',
    price: '27.00 JD'
  },
  {
    title: 'Halal Box Brisket',
    quantity: '2 Kilo',
    quantityAr: '٢ كيلو',
    price: '50.00 JD'
  },
  {
    title: 'Halal Box Brisket',
    quantity: '3 Kilo',
    quantityAr: '٣ كيلو',
    price: '75.00 JD'
  }
];

export const shrimpAddOns: AddOn[] = [
  {
    title: '250 Gram',
    titleAr: '٢٥٠ غرام',
    price: '6.50 JD'
  },
  {
    title: '500 Gram',
    titleAr: '٥٠٠ غرام',
    price: '12.50 JD'
  },
  {
    title: '1 Kilo',
    titleAr: '١ كيلو',
    price: '24.00 JD'
  }
];

export const contactInfo = {
  phoneDisplay: '07 9222 0302',
  phoneHref: 'tel:+962792220302',
  locationEnglish: 'Amman - 7th Circle - Behind Al Malkiya - Next to Trix Diner',
  locationArabic: 'عمان - السابع - خلف الملكية - بجانب تريكس داينر'
};

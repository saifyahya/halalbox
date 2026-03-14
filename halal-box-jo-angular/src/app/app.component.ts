import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddOn, comboItems, contactInfo, familyMeals, MenuItem, shrimpAddOns } from './menu-data';

const translations = {
  en: {
    navMenu: 'Menu',
    navFamily: 'Family Meals',
    navContact: 'Contact',
    heroEyebrow: 'Fresh · Halal · Handcrafted',
    heroH1: 'Bold flavors. Fresh bowls. Halal done right.',
    heroDesc: 'Halal Box Jo serves handcrafted rice bowls loaded with premium halal proteins, fresh vegetables and our signature sauces. Come find us at the 7th Circle in Amman for a meal you will crave again.',
    heroCta1: 'Explore Menu',
    heroCta2: 'Call Now',
    heroPhone: 'Phone',
    heroLocation: 'Location',
    heroLocationText: '7th Circle, Amman',
    introKicker: 'Who we are',
    introH2: 'Fresh halal bowls, built your way.',
    introP: 'At Halal Box Jo we believe halal food should be bold, fresh and never boring. Every bowl is assembled to order with quality proteins, crisp greens and our house-made sauces — fast, generous and always satisfying.',
    brandKicker: 'Our slogan',
    brandH2: 'بوكس يخطف قلبك!!',
    brandP: 'One bite and you will understand why the box steals your heart every single time.',
    menuLabel: 'Combo Menu',
    menuH2: 'Our signature combo bowls',
    menuP: 'Choose your protein, pick your toppings and get a fully loaded halal bowl made fresh for you.',
    menuOrder: 'Order',
    familyLabel: 'Family Meals',
    familyH2: 'Feed the whole family',
    familyP: 'Our brisket trays and shrimp platters are built for gatherings — generous portions and big flavours that bring everyone to the table.',
    addOnLabel: 'Add on Shrimp',
    addOnH3: 'Choose your size',
    contactLabel: 'Contact & Location',
    contactH2: 'Find us or order now',
    contactP: 'Call us to place your order or come visit us in Amman at the 7th Circle, behind Al Malkiya, next to Trix Diner. WhatsApp ordering and online checkout coming soon.',
    contactPhone: 'Phone',
    contactLocation: 'Location',
    footerDesc: 'Fresh halal bowls in Amman · 7th Circle, behind Al Malkiya.',
  },
  ar: {
    navMenu: 'القائمة',
    navFamily: 'وجبات العائلة',
    navContact: 'تواصل معنا',
    heroEyebrow: 'طازج · حلال · محضّر بعناية',
    heroH1: 'نكهات جريئة. بولات طازجة. حلال على أصوله.',
    heroDesc: 'هلال بوكس جو يقدم لك بولات أرز محضّرة بعناية من أجود البروتينات الحلال مع خضروات طازجة وصوصات مميزة. تعال وزرنا في الدوار السابع بعمان لوجبة لن تنساها.',
    heroCta1: 'استكشف القائمة',
    heroCta2: 'اتصل الآن',
    heroPhone: 'الهاتف',
    heroLocation: 'الموقع',
    heroLocationText: 'الدوار السابع، عمان',
    introKicker: 'هويتنا',
    introH2: 'بولات حلال طازجة، تُحضَّر على طلبك.',
    introP: 'في هلال بوكس جو نؤمن بأن الطعام الحلال يجب أن يكون جريئاً وطازجاً ومبهجاً. كل بول يُجمَّع عند الطلب من بروتينات فاخرة وخضروات مقرمشة وصوصاتنا البيتية — سريع، سخي ومُشبع دائماً.',
    brandKicker: 'شعارنا',
    brandH2: 'بوكس يخطف قلبك!!',
    brandP: 'لقمة وحدة وبتفهم ليش البوكس يسرق قلبك في كل مرة.',
    menuLabel: 'قائمة الكومبو',
    menuH2: 'كومبو بولاتنا المميزة',
    menuP: 'اختر بروتينك المفضل، أضف إضافاتك واستمتع ببول حلال مليء بالنكهات يُحضَّر طازجاً لك.',
    menuOrder: 'اطلب',
    familyLabel: 'وجبات العائلة',
    familyH2: 'أطعم العيلة كلها',
    familyP: 'أطباق البريسكت وصواني الروبيان مصنوعة للتجمعات — حصص سخية ونكهات لا تُقاوَم تجمع الجميع على طاولة واحدة.',
    addOnLabel: 'إضافة روبيان',
    addOnH3: 'اختر حجمك',
    contactLabel: 'التواصل والموقع',
    contactH2: 'زورنا أو اطلب الآن',
    contactP: 'اتصل بنا لتقديم طلبك أو تعال وزرنا في عمان، الدوار السابع، خلف الملكية، بجانب تريكس داينر. طلبات واتساب والدفع الإلكتروني قريباً.',
    contactPhone: 'الهاتف',
    contactLocation: 'الموقع',
    footerDesc: 'بولات حلال طازجة في عمان · الدوار السابع، خلف الملكية.',
  }
} as const;

type Lang = keyof typeof translations;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly comboItems: MenuItem[] = comboItems;
  readonly familyMeals = familyMeals;
  readonly shrimpAddOns: AddOn[] = shrimpAddOns;
  readonly contact = contactInfo;
  readonly currentYear = new Date().getFullYear();

  lang: Lang = 'en';

  get t() {
    return translations[this.lang];
  }

  get isRtl(): boolean {
    return this.lang === 'ar';
  }

  setLang(lang: Lang): void {
    this.lang = lang;
  }
}

// بيانات وهمية - استبدلها لاحقاً بجلب من API أو قاعدة بيانات
export const categories = [
  { id: 'electronics', name: "إلكترونيات", icon: "💻" },
  { id: 'fashion', name: "أزياء", icon: "👗" },
  { id: 'beauty', name: "تجميل", icon: "🧴" },
  { id: 'home', name: "منزل", icon: "🏠" },
];

export const products = [
  { id: 1, name: "ساعة ذكية", price: 299, img: "/product1.jpg", desc: "ساعة متعددة الوظائف مقاومة للماء.", rating: 4.3, category: "electronics" },
  { id: 2, name: "لاب توب حديث", price: 2100, img: "/product2.jpg", desc: "آداء قوي وبطارية تدوم طويلاً.", rating: 4.8, category: "electronics" },
  { id: 3, name: "حذاء رجالي", price: 120, img: "/product3.jpg", desc: "مريح وأنيق.", rating: 4.7, category: "fashion" },
  { id: 4, name: "قميص نسائي", price: 80, img: "/product4.jpg", desc: "قماش ناعم وتصميم عصري.", rating: 4.6, category: "fashion" },
  { id: 5, name: "ماكينة قهوة", price: 750, img: "/product5.jpg", desc: "تجربة قهوة احترافية في المنزل.", rating: 4.5, category: "home" },
  { id: 6, name: "كريم وجه", price: 65, img: "/product6.jpg", desc: "ترطيب وتغذية للبشرة.", rating: 4.2, category: "beauty" },
];

export function fetchCategories() {
  return Promise.resolve(categories);
}

export function fetchProducts(categoryId) {
  if (!categoryId) return Promise.resolve(products);
  return Promise.resolve(products.filter(p => p.category === categoryId));
}

export function fetchProductById(id) {
  return Promise.resolve(products.find(p => p.id === Number(id)));
}
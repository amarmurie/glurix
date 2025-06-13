# Glurix Store

متجر إلكتروني عصري متعدد البائعين والمنتجات، يعمل بـ React، قابل للتطوير ويحتوي على:
- واجهة رئيسية احترافية وتصنيفات ومنتجات
- تفاصيل منتجات متقدمة وسلة شراء تفاعلية
- طرق دفع (بطاقة بنكية عبر Stripe، عند الاستلام، تحويل بنكي)
- تجربة مستخدم عصرية مع إشعارات ورسوم تفاعلية
- بنية جاهزة لربط باك اند وAPI حقيقي
- دعم تسجيل/دخول المستخدمين ولوحة تحكم بائع

---

## كيفية رفع المتجر على Vercel (استضافة مجانية)

### 1. تأكد أن مشروعك موجود في GitHub

- إذا لم يكن موجودًا:
  ```
  git init
  git add .
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/اسم_المستخدم/glurix-store.git
  git push -u origin main
  ```
- إذا كان موجودًا، فقط ادفع آخر التعديلات:
  ```
  git add .
  git commit -m "updates"
  git push
  ```

---

### 2. أنشئ حسابًا على [Vercel](https://vercel.com)

- سجل دخولك بحساب GitHub.
- اختر "Add New Project" ثم اربط بمشروعك `glurix-store`.
- Vercel سيتعرف تلقائيًا على مشروع React.
- انتظر حتى ينتهي البناء (Build).
- ستحصل على رابط مباشر مثل:
  ```
  https://glurix-store.vercel.app
  ```

---

### 3. معاينة المتجر

- بعد انتهاء البناء، يمكنك الدخول للرابط ومعاينة متجرك مباشرة من أي جهاز.
- أي تحديث تدفعه على GitHub سيتم نشره تلقائيًا على Vercel.

---

### 4. ربط الدفع الإلكتروني (Stripe)

- تحتاج حساب Stripe ومفتاح عام (publishable key).
- ضع المفتاح في كود الواجهة الأمامية:
  ```
  const stripePromise = loadStripe("pk_test_YourStripePublicKey");
  ```
- لإنشاء جلسة دفع (Checkout Session)، يجب أن يكون لديك باك اند (Node.js/Express) وتضيف endpoint مثل:
  ```
  POST /api/stripe/create-session
  ```
  الذي يتعامل مع stripe API ويرد بـ sessionId.
- يمكنك استضافة الباك اند مجانًا على [Render](https://render.com) أو [Railway](https://railway.app).

---

### 5. ملاحظات حول الصور والروابط

- تأكد من أن الصور في مجلد `public/` أو استخدم روابط مباشرة.
- إذا ظهرت مشاكل في المسارات، استخدم `/public/اسم_الصورة.jpg` أو رابط خارجي.

---

### 6. دعم وتوسعة المتجر

- يمكنك إضافة قاعدة بيانات وربط المنتجات والتصنيفات لاحقًا عبر REST API أو Firebase أو Supabase.
- يمكنك تطوير لوحة تحكم البائعين وربطها بالباك اند.
- لتفعيل دفع Stripe حقيقي، تحتاج endpoint باك اند آمن (لا تضع مفتاح stripe السري secret في جهة العميل).
- يمكنك استخدام مكتبات رسوميات مثل [Framer Motion](https://www.framer.com/motion/) أو [react-toastify](https://fkhadra.github.io/react-toastify/) لتجربة تفاعلية أفضل.

---

### 7. تشغيل المتجر محليًا

```
npm install
npm start
```
- افتح [http://localhost:3000](http://localhost:3000) لمعاينة المتجر على جهازك.

---

### 8. مشاكل شائعة وحلول

- إذا ظهرت صفحة بيضاء على Vercel: تأكد أن جميع الروابط والملفات معرفة بشكل صحيح وأن build يعمل محليًا.
- مشاكل Stripe: تأكد أن endpoint الباك اند يعمل وأنك تستخدم مفاتيح stripe الصحيحة (test للبيئة التجريبية).
- مشاكل الصور: استخدم روابط كاملة أو ضع الصور في مجلد public.

---

## للمزيد من الدعم أو التخصيص

- يمكنك التواصل مع مطوري React أو البحث في [Vercel Docs](https://vercel.com/docs).
- إذا أردت ربط باك اند أو أي خدمة خارجية، راجع توثيق الخدمة (Stripe، Firebase، إلخ).

---

بالتوفيق في متجرك! 🚀
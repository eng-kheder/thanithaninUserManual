# ثاني اثنين — دليل الصيدليات

موقع تعريفي للقيمة الجوهرية لنظام ثاني اثنين للصيدليات، يركّز على خلق الحاجة ثم عرض الحل — لا على البيع المباشر.

## المحاور

1. **Hero**: سؤال يضع المستخدم في قلب المشكلة.
2. **Challenges**: 5 مواقف يومية تمر بها الصيدليات.
3. **Batch Tracking**: القيمة المركزية — تتبع رقم الدفعة والصلاحية، FEFO، حماية نقطة البيع.
4. **Integration**: HR + الصلاحيات + البوابة + المحاسبة + POS + زاتكا ورصد.
5. **Reports**: قيمة التقارير كإجابة على أسئلة يواجهها أصحاب الصيدليات.
6. **Closing**: دعوة لطيفة وغير مباشرة.

## التقنيات

- Next.js 14 (App Router) — تصدير ثابت (`output: 'export'`)
- Tailwind CSS — ألوان مطابقة لهوية السيستم (الأخضر `#03b562` + الأزرق الداكن `#3b497e`)
- framer-motion — أنيميشن خفيف
- lucide-react — أيقونات
- خطوط: Tajawal (عربي) + Plus Jakarta Sans

## الأوامر

```bash
npm install
npm run dev      # localhost:3000
npm run build    # ينتج مجلد out/ جاهز للرفع
```

## النشر على Netlify

الإعدادات مضمّنة في `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `out`
- Node: 20

ارفع المستودع على GitHub ثم اربطه بـ Netlify، أو اسحب مجلد `out/` يدوياً إلى Netlify.

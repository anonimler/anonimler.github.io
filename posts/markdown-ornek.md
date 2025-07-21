# Web Geliştirme İpuçları 2024

Web geliştirmede 2024 yılında bilmeniz gereken en güncel ipuçları ve trendler.

## 1. Modern CSS Özellikleri

CSS'in son yıllarında eklenen güçlü özellikler:

### Container Queries
```css
@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

### CSS Grid Subgrid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.subgrid {
  display: grid;
  grid-template-columns: subgrid;
}
```

## 2. JavaScript ES2024 Özellikleri

### Temporal API
```javascript
const now = Temporal.Now.plainDateTimeISO();
const nextWeek = now.add({ days: 7 });
```

### Pattern Matching (Proposal)
```javascript
const result = match (value) {
  when String: 'string value',
  when Number: 'number value',
  default: 'unknown type'
}
```

## 3. Performans İpuçları

> **Önemli:** Web Core Vitals'ları takip etmeyi unutmayın!

import json

with open("products_raw.json", "r", encoding="utf-8") as f:
    data = json.load(f)

cleaned = []

for product in data:
    # Récupérer la chaîne unique
    raw_line = list(product.values())[0]
    parts = [p.strip().strip('"') for p in raw_line.split(";")]

    if len(parts) >= 6:
        cleaned.append({
            "name": parts[0].title(),
            "brand": parts[1].title(),
            "category": parts[2].title(),
            "ingredients": [ing.strip().title() for ing in parts[3].split(";") if ing.strip()],
            "skin_types": [st.strip().title() for st in parts[4].split(";") if st.strip()],
            "concerns": [c.strip().title() for c in parts[5].split(";") if c.strip()]
        })

with open("products_clean.json", "w", encoding="utf-8") as f:
    json.dump(cleaned, f, indent=2, ensure_ascii=False)

print("✅ Dataset cleaned and saved to products_clean.json")
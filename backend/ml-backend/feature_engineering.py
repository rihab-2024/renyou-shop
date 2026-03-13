import json
import pandas as pd
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.sparse import hstack, save_npz

# Charger dataset nettoyé
with open("products_clean.json", "r", encoding="utf-8") as f:
    data = json.load(f)

df = pd.DataFrame(data)

# Multi-hot encode skin_types
mlb = MultiLabelBinarizer()
skin_matrix = mlb.fit_transform(df["skin_types"])
skin_df = pd.DataFrame(skin_matrix, columns=[f"skin_{s}" for s in mlb.classes_])

print("✅ Skin types encoded")
print("Skin type features:", skin_df.columns.tolist())

# TF-IDF sur ingredients (skip vide)
ingredients_texts = [" ".join(ings) if len(ings) > 0 else "" for ings in df["ingredients"]]

# Filtrer produits avec au moins un ingrédient
non_empty_idx = [i for i, txt in enumerate(ingredients_texts) if txt.strip() != ""]
if len(non_empty_idx) == 0:
    print("⚠️ No ingredients found in dataset. Please fill products_clean.json with ingredient values.")
else:
    tfidf = TfidfVectorizer()
    ingredients_matrix = tfidf.fit_transform([ingredients_texts[i] for i in non_empty_idx])

    print("✅ TF-IDF done")
    print("Ingredients vocab size:", len(tfidf.vocabulary_))

    # Combiner matrices (skin types + TF-IDF)
    combined_matrix = hstack([skin_df.values[non_empty_idx], ingredients_matrix])

    # Sauvegarder
    save_npz("product_features.npz", combined_matrix)

    print("✅ Product feature matrix built and saved to product_features.npz")
    print("Matrix shape:", combined_matrix.shape)
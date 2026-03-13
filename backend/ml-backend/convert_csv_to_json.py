import pandas as pd

# Load CSV with chemin complet
df = pd.read_csv(r"C:\Users\user\Desktop\renyou-shop\backend\ml-backend\products_raw.csv")

# Convert to JSON
df.to_json("products_raw.json", orient="records", indent=2)

print("✅ Converted CSV to JSON and saved as products_raw.json")
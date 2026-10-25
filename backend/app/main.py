from fastapi import FastAPI
from app.routers import auth, items, claims, ai, health

app = FastAPI(title="CampusFind API")

app.include_router(auth.router)
app.include_router(items.router)
app.include_router(claims.router)
app.include_router(ai.router)
app.include_router(health.router)

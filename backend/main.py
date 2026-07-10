from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.ai import router as ai_router

app = FastAPI(title="AI CRM Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# AI Router
app.include_router(ai_router, prefix="/ai", tags=["AI"])


@app.get("/")
def home():
    return {"message": "Backend Running 🚀"}
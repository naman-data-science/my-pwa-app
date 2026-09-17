from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow your Netlify frontend to call this backend.
# Update this list once you have your real Netlify URL.
origins = [
    "http://localhost:5173",
    "https://peppy-puppy-9df68c.netlify.app",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Backend is running"}

@app.get("/api/hello")
def read_hello():
    return {"message": "Hello from FastAPI!"}
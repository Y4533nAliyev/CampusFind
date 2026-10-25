from fastapi import APIRouter

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register")
def register():
    return {"message": "not implemented yet"}

@router.post("/login")
def login():
    return {"message": "not implemented yet"}

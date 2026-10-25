from fastapi import APIRouter

router = APIRouter(prefix="/ai", tags=["ai"])

@router.post("/cleanup")
def cleanup_description():
    return {"message": "not implemented yet"}

from fastapi import APIRouter

router = APIRouter(tags=["claims"])

@router.post("/items/{item_id}/claims")
def submit_claim(item_id: int):
    return {"message": "not implemented yet"}

@router.patch("/claims/{claim_id}")
def review_claim(claim_id: int):
    # later: approve or reject
    return {"message": "not implemented yet"}

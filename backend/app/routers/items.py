from fastapi import APIRouter

router = APIRouter(prefix="/items", tags=["items"])

@router.post("")
def create_item():
    return {"message": "not implemented yet"}

@router.get("")
def list_items(
    type: str | None = None,         # "lost" or "found"
    category: str | None = None,
    location_id: int | None = None,
    date: str | None = None,
    page: int = 1,
    page_size: int = 20,
):
    return {"items": [], "page": page, "page_size": page_size}

@router.get("/{item_id}")
def get_item(item_id: int):
    return {"id": item_id}

@router.get("/{item_id}/matches")
def get_matches(item_id: int):
    return {"matches": []}

@router.post("/{item_id}/resolve")
def resolve_item(item_id: int):
    return {"message": "not implemented yet"}

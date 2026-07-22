from fastapi import Request, HTTPException


async def get_current_user(request: Request) -> dict:
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        raise HTTPException(status_code=401, detail="Missing authorization")

    # Phase 2: Implement Supabase JWT verification
    return {"id": "placeholder", "role": "staff"}

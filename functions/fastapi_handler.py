# FastAPI as Netlify Function

from fastapi_app import app
from mangum import Mangum


handler = Mangum(app)


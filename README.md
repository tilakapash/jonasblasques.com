# My Personal Website & Digital Garden

This is my personal website and digital garden, built with a combination of Flask and FastAPI for the backend, and deployed using Netlify.

## Structure

- `frontend/`: Contains frontend assets (HTML, CSS, JavaScript).
- `backend/`: Contains backend APIs (Flask and FastAPI).
  - `flask_app.py`: Flask API initialization.
  - `fastapi_app.py`: FastAPI initialization.
- `functions/`: Contains Netlify Functions.
  - `flask_handler.py`: Flask as Netlify Function.
  - `fastapi_handler.py`: FastAPI as Netlify Function.
- `scripts/`: Deployment and automation scripts.
- `netlify.toml`: Netlify configuration.
- `requirements.txt`: Python dependencies.

## Setup

1. Clone the repository.
2. Install dependencies:
    \`\`\`bash
    pip install -r requirements.txt
    \`\`\`
3. Run the Flask app:
    \`\`\`bash
    python backend/flask_app.py
    \`\`\`
4. Run the FastAPI app:
    \`\`\`bash
    uvicorn backend.fastapi_app:app --reload
    \`\`\`

## Deployment

This project is configured to be deployed on Netlify.


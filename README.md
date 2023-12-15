# React Native FastAPI Langchain Starter Kit

Full-stack starter kit for building cross-platform mobile AI apps supporting OpenAI LLMs real-time / streaming text and chat user interfaces.

## Acknowledgements

Before diving into the setup, I would like to extend my sincere thanks and recognition to the [React Native AI](https://github.com/dabit3/react-native-ai) repository and its author. The React Native part of this project heavily draws from this repository. I've refined the original code to concentrate on OpenAI support, ensuring it's streamlined for this specific function.

On the backend side, as a Python enthusiast, I noticed a lack of templates or starter kits combining React Native with FastAPI and Langchain. To fill this gap, I developed a simple yet effective FastAPI backend. It features a clean, easily extendable folder structure and a single endpoint, making it ideal for Python developers stepping into the world of mobile AI applications.

## Getting Started

![React Native FastAPI Langchain Starter Kit](https://imgur.com/q8eTNKc.jpg)

### Setting Up the FastAPI Backend Application

There are two methods to set up the backend:

**Option 1: Using Docker**
1. Add your `OPENAI_API_KEY` to the `.env` file located at `fastapi-backend-app/.env`.
2. Execute `docker-compose up -d` from the root directory to start the backend.

**Option 2: Setting Up Locally with Python Virtual Environment (venv)**
1. Change to the backend directory using `cd fastapi-backend-app/`.
2. Create a Python virtual environment with `python -m venv env`.
3. Activate the virtual environment:
   - On macOS/Linux: `source env/bin/activate`.
   - On Windows: `env\Scripts\activate`.
4. Install the required dependencies by running `pip install -r requirements.txt`.
5. Add your `OPENAI_API_KEY` to the `fastapi-backend-app/.env` file.
6. Start the FastAPI backend app with `uvicorn --reload --proxy-headers --host 0.0.0.0 --port 8000 src.main:app`.
   - Note: If you encounter a `ModuleNotFoundError`, ensure that the virtual environment is activated.

### Configuring the React Native Application

1. Navigate to the React Native app directory: `cd react-native-app/`.
2. Install the dependencies using `npm i`.
3. Launch the React Native app with `npm start`.

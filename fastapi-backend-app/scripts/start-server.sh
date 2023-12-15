#!/usr/bin/env bash

set -e

exec uvicorn --reload --proxy-headers --host 0.0.0.0 --port 8000 src.main:app
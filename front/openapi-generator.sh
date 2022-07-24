#!/bin/bash
# https://github.com/OpenAPITools/openapi-generator
curl http://localhost/api/docs.json > api.json
rm -rf /local/src/app/core/backend
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/api.json \
    -g typescript-angular \
    -o /local/src/app/core/backend
rm api.json

#!/bin/bash
# https://github.com/OpenAPITools/openapi-generator
curl http://localhost/docs.json > api.json
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/api.json \
    -g typescript-angular \
    -o /local/src/app/core/api
rm api.json

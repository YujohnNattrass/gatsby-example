#!/bin/bash

gatsby build

aws s3 cp --recursive public/ s3://gatsby-example --cache-control 'public, max-age=300, s-maxage=31536000'

aws cloudfront create-invalidation --paths '/*' --distribution-id E1QCAEZAPUW50S
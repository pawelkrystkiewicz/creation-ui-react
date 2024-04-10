#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <version_number>"
    exit 1
fi

VERSION="$1"

git commit --allow-empty -m "chore: release $VERSION" -m "Release-As: $VERSION" && git push origin master

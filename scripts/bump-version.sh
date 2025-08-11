#!/bin/zsh
set -e

if [[ -z "$1" ]]; then
  echo -n 'Enter new version: '
  read VERSION
  if [[ -z "$VERSION" ]]; then
    echo "No version provided. Aborting."
    exit 1
  fi
else
  VERSION="$1"
fi

sed -i '' "s/\"version\": \".*\"/\"version\": \"$VERSION\"/" package.json
git add package.json
git commit -m ":bookmark: $VERSION"
git tag -a $VERSION
git push origin tag $VERSION

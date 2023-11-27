#!/bin/bash

(cd docs && git clone git@github.com:skkumail/skkumail.github.io.git)

doxygen Doxyfile

(
  cd docs/skkumail.github.io
  git add .
  git commit -m "docs(doxygen): Generate updated documentation"
  git push origin main
)



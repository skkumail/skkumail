#!/bin/bash

for file in *.PNG; do
    if [ -f "$file" ]; then
        base=$(basename "$file" .PNG)
        mv "$file" "${base}.png"
    fi
done


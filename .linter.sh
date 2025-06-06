#!/bin/bash
cd /home/kavia/workspace/code-generation/colorflip-75-ac5e1020/colorflip
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


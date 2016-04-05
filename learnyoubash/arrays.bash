#!/usr/bin/env bash
me=(I am ${@:2:2} and ${@:4:1})

echo "${me[*]}"

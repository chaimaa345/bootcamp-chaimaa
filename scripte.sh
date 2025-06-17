#!/bin/bash

for week in {1..8}
do
  mkdir -p "week$week"
  for day in {1..5}
  do
    mkdir -p "week$week/day$day/mandatory"
    mkdir -p "week$week/day$day/challenges"
  done
done

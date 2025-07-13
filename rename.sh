#!/bin/bash

echo "Running script!" 
i=1

for filename in *.jpg; do
  [ -e "$filename" ] || continue

  date=$(exiftool -s3 -d %Y-%m-%d -CreateDate $filename)

  newname="$(printf '%03d' "$i")_blogphoto_$(printf "$date").jpg"
  if [[ -e $newname ]]; then
      echo "file $newname exist, not moving $fi"
  else
      mv "$filename" "$newname"
  fi

  i=$((i + 1))  #increments number -- note that bash arithmetic requires double brackets
done

  # printf "%03d\n" "$i" #three digit number formatting

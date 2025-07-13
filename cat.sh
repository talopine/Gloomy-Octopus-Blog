#!/bin/bash
echo "Running script!" 

i=1

for filename in content/posts/2007Photos/img/*.jpg; do
  [ -e "$filename" ] || continue

  file=$(exiftool -s3 -FileName $filename)
  date=$(exiftool -s3 -d %Y-%m-%d -CreateDate $filename)
  model=$(exiftool -s3 -model $filename)
  shotdetails=$(printf "%s, f/%s" $(exiftool -s3 -shutterspeedvalue -aperturevalue $filename))

  printf '  {\n    "FilePath" : "%s",\n' $file >> output.txt
  printf '    "ImageTitle" : "",\n' >> output.txt
  printf '    "PhotoDetails1" : "%s",\n' "$model" >> output.txt
  printf '    "PhotoDetails2" : "%s",\n' "$shotdetails" >> output.txt
  printf '    "Commentary" : "%s"\n  },\n' $date >> output.txt

done 

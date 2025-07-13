#!/bin/bash
echo "Hello World!" 

filepath="\"FilePath\" : "
ImageTitle="\"ImageTitle\" : "
PhotoDetails2="\"PhotoDetails2\" : "
PhotoDetails1="\"PhotoDetails1\" : "
commentary="\"Commentary\" : \"\""

exec < content/posts/2007Photos/2007.csv
read header
while IFS="," read -r col_1 col_2 col_3 col_4
do    
    echo -e "{" $filepath $col_1","$ImageTitle $col_3","$PhotoDetails2 $col_4"," $PhotoDetails1 $col_2"," $commentary"}," >> output.txt
done 



#  {
#    "FilePath": $col_1,
#    "ImageTitle": $col_3,
#    "PhotoDetails2": $col_4,
#    "PhotoDetails1": $col_2,
#    "Commentary": ""
#  },




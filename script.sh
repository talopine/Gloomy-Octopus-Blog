#!/bin/bash
echo "Hello World!" 

filepath="\"FilePath\" : "
imageDescription="\"ImageDescription\" : "
licensorURL="\"LicensorURL\" : "
photoCredit="\"PhotoCredit\" : "
commentary="\"Commentary\" : \"\""

exec < list1.csv
read header
while IFS="," read -r col_1 col_2 col_3 col_4
do    
    echo -e "{" $filepath $col_1","$imageDescription $col_3","$licensorURL $col_4"," $photoCredit $col_2"," $commentary"}," >> output.txt
done 



#  {
#    "FilePath": $col_1,
#    "ImageDescription": $col_3,
#    "LicensorURL": $col_4,
#    "PhotoCredit": $col_2,
#    "Commentary": ""
#  },
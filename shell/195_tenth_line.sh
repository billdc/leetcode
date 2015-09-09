#!/bin/bash
l=0
while read k
do
    let "l=l+1"
    if [ $l -eq "10" ] ; then
        echo ${k}
    fi
done < file.txt

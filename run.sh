#!/usr/bin/env bash
SITE="http://10.60.102.49:18000/mashup-ui/page/"
#TIMESTAMP=$(date +%s)
#ENV="PROD"
LOGLEVEL="error"
USERID=""
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`
# Remove any previous test run files.
rm -f fail.png
rm -f log.xml
#rm -r img
#rm -r testHtml.html
NOW=$(date +"%d_%m_%Y_%T")
echo $NOW


echo ${green}"******************* welcome to Test Application ***************************"
echo "You have to choose only one project to be tested From this list: "

for i in $(ls -d tests/*); do 
echo ${red}'** '${i%%/}; 
done

#read the name of folder to be tested
read -p "Press ENTER if you want to test all folder: " folder


if [ ${#folder} -eq 0 ]; then
  echo "Enter was hit"
  # Kick off CasperJS.
    casperjs test tests/ --site="${SITE}" --userId="${USERID}" --timestamp=${NOW} --logLevel="${LOGLEVEL}" --ignore-ssl-errors=true --includes=functions.js --xunit=log.xml	
else
# Kick off CasperJS.
    casperjs test tests/"${folder}"/ --site="${SITE}" --userId="${USERID}" --timestamp=${NOW} --logLevel="${LOGLEVEL}" --ignore-ssl-errors=true --includes=functions.js --xunit=log.xml	
fi

junit-viewer --results=../OneCallTelco-front-test/ --save=output/result/test"${NOW}".html

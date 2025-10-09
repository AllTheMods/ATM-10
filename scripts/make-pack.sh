mkdir -p tmp/overrides
cp -R config datapacks defaultconfigs kubejs local mods tmp/overrides/
cp manifest.json tmp/
cd tmp
zip -r ../ATM-10.zip manifest.json overrides
cd ..
rm -rf tmp
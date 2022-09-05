

// todo: simply close Excel, run npm run dev-server then reopen Excel, should be good enough

<!DOCTYPE html>
<html lang="en">


    <b>Test locally:</b>
Close Excel
rm -r ~/Library/Containers/com.microsoft.Excel
sudo lsof -i :3000
kill -9 7371
Open Excel
cd /Users/tuando/Library/Containers/com.microsoft.Excel/Data/Documents/
mkdir wef
cd wef
open .
(delete Production manifest if exists)
    copy the file manifest.xml into wef folder (manifest runs files in localhost:3000)
CLose Excel
npm run dev-server    // Run this in Golang
Run in command line: defaults write com.microsoft.Excel OfficeWebAddinDeveloperExtras -bool true
Open Excel





<b>Test production</b>

rm -r ~/Library/Containers/com.microsoft.Excel
cd /Users/tuando/Library/Containers/com.microsoft.Excel/Data/Documents/wef
(If wef does not exist then: mkdir wef)
open .
(copy Production manifest in here, delete other manifests if exist)
    Open Excel




</html>
cd out
git init
git add -A
git commit -a -m "Deployed at $(date)"
git remote add origin $GITHUB_URL
git push -f origin master
rm -Rf .git

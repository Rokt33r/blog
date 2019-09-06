cd out
touch .nojekyll
git init
git add -A
git commit -a -m "Deployed at $(date)"
git remote add origin git@github.com:Rokt33r/rokt33r.github.io.git
git push -f origin master
rm -Rf .git

cd C:\Users\君莫笑\Desktop\谷歌扩展\test
@echo off 
set CURRENT_DATE=%date:~0,4%-%date:~5,2%-%date:~8,2%/%time:~0,2%:%time:~3,2%:%time:~6,2% 
if exist .git (
	echo git库已经存在
) else (
	echo 初始化git库
@echo on
	git config --global user.name "yuan1115"
	git config --global user.email "wzy2265844155@gmail.com"
	git init
)  
@echo on 
git add .
git commit -m %CURRENT_DATE%
git remote rm origin
git remote add origin git@github.com:yuan1115/omlogin.git
git push -u origin master
echo. & pause
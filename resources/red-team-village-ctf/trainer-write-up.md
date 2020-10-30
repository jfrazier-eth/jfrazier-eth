# Level 0
* ssh to the linux trainer as the level0 user. 
```
ssh level0@167.71.187.239
```
* password level0
* Find the password for level1 by printing out the contents of the file `level1_password`
```
cat level1_password
```
* Password: `4202c26842398c1d0772ed9eed195113`

# Level 1 
* Navigate to the home directory `cd ~/../`
* Switch to the level1 user `su level1` password `4202c26842398c1d0772ed9eed195113`
* Move to the user's home directory `cd level1`
* From here you can either manually search for the next password, but given that the last password was in a file called `level1_password`, it is reasonable to think the password for level 2 will be in a file called `level2_password` so we can use the command below to find the relative path to the file level2_password and us that as the input to the cat command automatically printing the password. 
```
cat `find ./ -name level2_password`
```
* Password: `943430e07fd566bc96aa05fca3c96e48`

# Level 2
* Navigate to the home directory `cd ~/../`
* Switch to the level2 user `su level2` password `943430e07fd566bc96aa05fca3c96e48`
* Move to the user's home directory with `cd level2`
* Use the same command as level1 but for the file `level3_password`
```
cat `find ./ -name level3_password`
```
* Password: `2cadca6148093c403d82396252b8c4db`

# Level 3
* Navigate to the home directory `cd ~/../`
* Switch to the level3 user `su level3` password `2cadca6148093c403d82396252b8c4db`
* Move to the user's home directory with `cd level3`
* I first tried to use the same command as the last two levels however it didn't work. I then viewed the level's welcome message and found out that the file is probably a hidden file. By adding a `.` to the beginning of the file name we can find the hidden file `.level3_password` and print out its contents with 
```
cat `find ./ -name .level4_password
```
* Password: `72f6af6b0005adb15fbc91e1b140115f`

# Level 4
* Navigate to the home directory `cd ~/../`
* Switch to the level4 user `su level4` password `72f6af6b0005adb15fbc91e1b140115f`
* Move to the user's home directory with `cd level4`
* For this level our previous approach does not work initially, but after viewing the conents of `level4` directory and its hidden files with `ls -a` we find a hidden directory called `.hidden_dir`. We can then search for the password file and print its contents with the command below.
```
cat `find .hidden_dir/ -name level5_password`
```
* Password: `7b6c2552940f47a27fbd729ae0e2893c`

# Level 5
* Navigate to the home directory `cd ~/../`
* Switch to the level5 user `su level5` password `7b6c2552940f47a27fbd729ae0e2893c`
* Move to the user's home directory with `cd level5`
* View the `welcome_message` file with `cat welcome_message`
* We find that the password is in level6's home directory
* We can get the contents of the `level6_password` file with the command
```
cat `find ../level6/ -name level6_password`
```
* Here we tell find to search the `level6` directory for the file `level6_password`
* Password: `7cb1963d316b9a302cf6c204d35b7302`

# Level 6
* Navigate to the home directory `cd ~/../`
* Switch to the level6 user `su level6` password `7cb1963d316b9a302cf6c204d35b7302`
* Move to the user's home directory with `cd level6`
* If we print the welcome message we find that the level7 password is somewhere in this directory but there are a lot of sub directories it could be in
* We can use a similar command to what we have been using to search all of these directories by telling find to start the search at the current directory and look for the file `level7_password`
```
cat `find ./ -name level7_password`
```
* Password: `RG8geW91IGV2ZW4gbGlmdCBicm8g`

# Level 7






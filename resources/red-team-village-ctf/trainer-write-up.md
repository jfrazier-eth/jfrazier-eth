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
* Navigate to the home directory `cd ~/../`
* Switch to the level7 user `su level7` password `RG8geW91IGV2ZW4gbGlmdCBicm8g`
* Move to the user's home directory with `cd level7`
* View the welcome message with `cat welcome_message`
* We are told the password is in one of the files in the `password_directory`, shocking
* Since there are only 100 password files, we can just print out the contents of all of them to a file then find the one that looks like a password using the command below
```
cat `find ./password_directory *`
```
* Password: `bGV0J3MgZmluZCBzb21ldGhpbmcg`

# Level 8
* Navigate to the home directory `cd ~/../`
* Switch to the level8 user `su level8` password `bGV0J3MgZmluZCBzb21ldGhpbmcg`
* Move to the user's home directory with `cd level8`
* View the welcome message to find that the file is an execuatble somewhere in the directory. 
* We first find the file with 
```
find ./ -name level9_password
```
* We can then run the executable to get the password
```
./dir24/subdir13/level9_password
```
* Password: `96ab15e954f1267ea04c35de2d771c2b`

# Level 9
* Navigate to the home directory `cd ~/../`
* Switch to the level9 user `su level9` password `96ab15e954f1267ea04c35de2d771c2b`
* Move to the user's home directory with `cd level9`
* View the welcome message to find out that the password is the line number of the string evilhacker in the file `/usr/share/wordlists/rockyou.txt` 
* We can find this using the grep command, supplying a word to search for, namely `evilhacker`, use the `-n` option to display the line where a match is found, and supply a path to the file to search
```
grep -w 'evilhacker' -n /usr/share/wordlists/rockyou.txt 
```
* Password: `955830`

# Level 10
* Navigate to the home directory `cd ~/../`
* Switch to the level10 user `su level10` password `955830`
* Move to the user's home directory with `cd level10`
* View the welcome message to find out that the password for the next level is the number of times the ip address `112.85.42.94` has been banned.
* After looking at the logs, I found out that everytime an ip address is banned, it follows the format of `Ban ip`. To count the number of times `112.85.42.94` was banned we can use the grep command to search the file for lines that include `Ban 112.85.42.94` and use the `-c` option to get the total number of lines matched.
```
grep -w 'Ban 112.85.42.94' -c fail2ban.log
```
* Password: `192`




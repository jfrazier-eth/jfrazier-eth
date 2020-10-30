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
* Switch to the level2 user `su level1` password `943430e07fd566bc96aa05fca3c96e48`
* Move to the user's home directory with `cd level2`
* I first try using the same command above but for the `level2_password` file.

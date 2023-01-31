### *cut*

The `cut` command cuts out the sections from each line of files and writes the result to standard output. 
It can be used to cut parts of a line by byte position, character and field (or columns). 

Basically the `cut` command slices the lines to extract some text.
The main use of this command concerns the extraction of columns indicated by their number (first column in number 1).

Here an example to extract the 3rd column of the _beautifulFriendLong.bed_ file:

`cut -f 3 beautifulFriendLong.bed`

Multiple columns can be extracted using a coma between two column numbers or a '-' for all successive columns.

Try the extraction of the 2 first columns and the 4th one from the _beautifulFriendLong.bed_ file:

`cut -f 1-2,4 beautifulFriendLong.bed`

You can change delimiter between fields with the option _-d_ of the `cut` command. 

Look at the begining of the `*.csv` file (try `head *.csv`). 
It contains XXth columns, separated by a comma.

>> Choose the rigth command(s) to extract the 3rd, 6th, and 7th columns of the *.csv file with the `cut` command: <<
[ ] cut -f 3,6,7 *.csv
[ ] cut -f 3,6-7 *.csv
[*] cut -f 3,6,7 -t "," *.csv
[*] cut -f 3,6-7 -t "," *.csv





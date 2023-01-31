## Step2:  How to select part of a file

### *grep*

The `grep` command extracts lines that match a given pattern. 
A pattern could be either a simple word or a more general expression, often termed **regular expression** (see [here](https://librarycarpentry.org/lc-data-intro/01-regular-expressions/) to learn more on them). 
For instance:

`grep nom_gene beautifulFriendLong.bed`

>> Print the line that contains the XYZ gene name in the file beautifulFriendLong.bed? <<
( ) aaa
( ) aaa
(*) ici
( ) aaa


If we now for gene ABC in the same file:

`grep ABC beautifulFriendLong.bed`

we get the n lines containing the ABC gene name.

To count the number of lines containing the ABC gene name, just add the `-c` option to the `grep` command:

`grep -c ABC beautifulFriendLong.bed`

>> Count the number of lines containing the DEF gene name? <<
( ) aaa
( ) aaa
(*) ici
( ) aaa


Here are other useful `grep` options :
- `-i`: searches the pattern in a case insensitive way
- `-n`: adds the line number at the beginning of the line
- `-v`: reverses the line selection

and many other again: try `man grep`



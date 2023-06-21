# Example input and output

As we have seen so far, a file may be redirected to the **stdin** of a command using the '<' operator while the stdout of a command can be redirect to a file using the '>' operator (or '>>' to append lines).

We would like to count the non-redundant list of entries in the 4th column of the SAOUHSC.bed file. 

Use the **cut** command to extract the 4th column from the SAOUHSC.bed bed file and create a file named 'SAOUHSC_c4.bed'. The column to be cut should be indicated using _-f 4_ or _--fields 4_ if using the long form of the argument. Note that the file is expected to be tabulated by default (column should be separated by a '\t'). This behaviour can be changed using the _-d/--delimiter_ argument.  

```
cut -f 4 SAOUHSC.bed > SAOUHSC_c4.bed
```

We may search for the non-redondant list of entries in column 4 using the sort command (which by default performs an alphanumeric sort) combined with the _-u_ (or --unique in its long form).

```
sort -u SAOUHSC_c4.bed > SAOUHSC_c4_uniq.bed
```


If we want to count the number of non-redundant entries in the SAOUHSC_c4_uniq.bed file we now have to use the _wc_ command. By default, the _wc_ command count the number of newline, word, and byte inside a file. We can use the _-l_ or _--lines_ arguments to simply count the number of lines.

```
wc -l SAOUHSC_c4_uniq.bed
```

As you may have noticed this simple steps required us to create several intermediary files which won't be of particular use later. In the next step we will see that we can get ride of these files using a the pipe "|" operator. 





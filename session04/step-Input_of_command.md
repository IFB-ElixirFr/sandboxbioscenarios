## Input of a Unix command

Icone “Vocabulary” : the standard input of a command is named **stdin**

![input stream of a command](./assets/stream_in_out.png)

By default, **stdin** is set to the keyboard. But you can change this behavior and read **stdin** from a file. You must use the “<” operator to do this.

The `tr` command translates (or deletes) characters from a text provided as input. The seq1 file contains one DNA sequence that we want to convert in RNA sequence (by replacing T by U) and change from upper case to lowercase

example : 
```bash
tr [AGCT] [agcu] seq1 
```

Icone remark: `cat toto` is equivalent to `cat < toto` and therefore `cat < toto` is seldom used

![input stream of a command](./assets/stream_infile_out.png)

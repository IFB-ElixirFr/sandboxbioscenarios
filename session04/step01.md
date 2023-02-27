## Output of a Unix command

By default, as you have seen so far, the result of a Unix command is printed on screen.

For example, we extract the genomic location for the gene-SAOUHSC_00079 from the `belebele.bed` file with the `grep`command :
First, check you have access to the `belebele.bed` file with the `ls` command and next, extract the location:
```bash
ls
ls data
cd data
grep gene-SAOUHSC_00079 belebele.bed
```
The result of the command `grep` is printed on the terminal.

📕 The standard output of a command is named **stdout**.

The schema illustrates the output stream of a command:

![output printed on the screen](./assets/stream_out.png)

By default, **stdout** is set to screen print.

But you can change this behavior and print **stdout** to a file.
You must use the `1>` operator to do this or more simply, `>`:

```bash
grep gene-SAOUHSC_00079 belebele.bed > gene.bed
```

Look: you created a new file named `gene.bed`
```bash
ls
```
You can see its content using the `cat` command:
```bash
cat gene.bed
```
The content of this new file is just the same as the result of the grep command.

The `>` symbol is one of the **redirection** operators.

The next figure illustrates the **stdout** redirection to a file:

![output printed into a file](./assets/stream_outfile.png)

⚠️ if the file already exists, it’s content will be replaced by the output of your command

If you run the same `grep` as before but searching for a different gene, the output file will be overwritten

```bash
grep gene-SAOUHSC_00078 belebele.bed > gene.bed
cat gene.bed
```

To avoid this, you may use the “>>” operator which appends the output of your command to the end of an existing file.

```bash
grep gene-SAOUHSC_00079 belebele.bed > gene.bed
grep gene-SAOUHSC_00078 belebele.bed >> gene.bed
cat gene.bed
```

>> Which command appends its result at the end of the toto file ? <<
( ) grep foo file1 > toto
(*) grep foo file1 >> toto
( ) grep foo toto > file1

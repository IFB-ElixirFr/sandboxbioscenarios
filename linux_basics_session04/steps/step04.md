<script>
import Execute from "components/Execute.svelte";
</script>

As we've seen so far, a file can be redirected to the **stdin** of a command using the `<` operator, while the **stdout** of a command can be redirected to a file using the `>` operator (or `>>` to add lines).

With this in mind, we're going to use the contents of some files to answer a few more specific questions, such as counting the number of genes contained in a file, extracting a list of genes, ...

For example we want to count the non-redundant list of entries in the fourth column of the `SAOUHSC.bed` file. 

Before manipulating a file, a good habit to get into is to check the structure of its content. Look at the format of the `SAOUHSC.bed` file :

```
head SAOUHSC.bed
```

Use the **cut** command to extract the 4th column from the bed file SAOUHSC.bed and create a file named `SAOUHSC_c4.bed`. The column to be cut must be specified using `-f 4` (or `--fields 4` if using the long form of the argument).  

```
cut -f 4 SAOUHSC.bed > SAOUHSC_c4.bed
```

Note that the file is supposed to be tabulated by default (columns must be separated by a '\t'). This behavior of the `cut` command can be modified using the `-d/--delimiter` argument. It is the case for instance if you operate on a `*.csv` file, where the delimiter is a comma `,`.

Look at the file newly created : it contains all the features initialy present in the fourth column:

```
cat SAOUHSC_c4.bed
```

Now we want get the chromosomal start positions of these features. In `bed` format, the start position stands in the 2nd column.

We use again the `cut` command and the `>` operator:

```
cut -f 2 SAOUHSC.bed > SAOUHSC_c2.bed
```

When we look at the result file `SAOUHSC_c2.bed`, we observe that it contains redundant entries:

```
head SAOUHSC_c2.bed
```

We want to suppress these redundant entries.
For that we use the `sort` command combined with the `-u` (or --unique in its long form) to ensure that the resulting list will be non-redundant and the `-n` (or `--numeric`) because `sort` performs an alphanumeric sort by default (which sorts 11 before 2).

```
sort -u -n  SAOUHSC_c2.bed > SAOUHSC_c2_uniq.bed
```

If we want to count the number of non-redundant entries in the `SAOUHSC_c2_uniq.bed file`, we now need to use the `wc` command. 
By default, the `wc` command counts the number of lines, words and bytes in a file. We can use the `-l` (or `--lines`) argument to simply count the number of lines.

```
wc -l SAOUHSC_c2_uniq.bed
```


As you may have noticed, this simple step required us to create several intermediate files that won't be particularly useful later on. In the next step, we'll see that we can get rid of these files by using the pipe `|` operator.

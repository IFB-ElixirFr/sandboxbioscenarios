<script>
import Execute from "components/Execute.svelte";
</script>

As we've seen so far, a file can be redirected to the **stdin** of a command using the `<` operator, while the **stdout** of a command can be redirected to a file using the `>` operator (or `>>` to add lines).

With this in mind, we're going to use the contents of some files to answer a few more specific questions, such as counting the number of genes contained in a file, extracting a list of genes...

For example we want to count the non-redundant list of genes in the fourth column of the `SAOUHSC.bed` file. 

Prior to handling a file, it is advisable to develop the habit of inspecting the structure of its contents. Look at the content of the `SAOUHSC.bed` file :

```
head SAOUHSC.bed
```

Use the **cut** command to extract the 4th column from the bed file SAOUHSC.bed and create a new file named `SAOUHSC_c4.bed`. Specify the column to be extracted using `-f 4` (or `--fields 4` if using the long form of the argument).  

```
cut -f 4 SAOUHSC.bed > SAOUHSC_c4.bed
```

Please be aware that the default assumption is that the file is tabulated (with columns separated by a '\t'). The behavior of the `cut` command can be modified using the `-d/--delimiter` argument. It is the case for instance if you operate on a `*.csv` file, where the delimiter is a comma `,`.

Look at the newly created file. It contains all the features initialy present in the fourth column.

```
cat SAOUHSC_c4.bed
```


Now, our objective is to obtain the chromosomal start positions of these features. In the `bed` format, the start position is located in the second column.

We will use the `cut` command again together with the `>` operator:

```
cut -f 2 SAOUHSC.bed > SAOUHSC_c2.bed
```

Looking at the `SAOUHSC_c2.bed` file, it becomes apparent that it includes duplicate entries.

```
head SAOUHSC_c2.bed
```

Our objective is to eliminate these duplicate entries. To achieve this, we will use the `sort` command in conjunction with the `-u` (or --unique in its long form) to guarantee a non-redundant list. Additionally, we use the `-n` (or `--numeric`) option since `sort` performs an alphanumeric sort by default which may lead to sorting 11 before 2.

```
sort -u -n  SAOUHSC_c2.bed > SAOUHSC_c2_uniq.bed
```

To determine the number of non-redundant entries in the in the `SAOUHSC_c2_uniq.bed file`, we must now employ the `wc` command. By default, the `wc` command counts the number of lines, words and bytes in a file. We can use the `-l` (or `--lines`) argument to simply count the number of lines.

```
wc -l SAOUHSC_c2_uniq.bed
```

The number of lines of the `SAOUHSC.bed` file  has approximately halved in `SAOUHSC_c2_uniq.bed`. Indeed, in the original bed file, gene and cds annotations have the same positions.

As you may have noticed, this simple step required us to create several intermediate files that won't be particularly useful later on. In the next step, we'll see that we can get rid of these files by using the pipe `|` operator.

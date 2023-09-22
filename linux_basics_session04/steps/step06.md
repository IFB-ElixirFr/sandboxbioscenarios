<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

As we've seen so far, the **sort** command performs, **by default, alphanumeric sorting** on a text stream. 
As we said before and as you can see below, alphanumeric sorting is not well suited for stricly numeric values.

<Execute command="echo -e '1\n100\n2\n3\n200\n20\n10' | sort" />

To perform numeric sorting one need to activate the `-n/--numeric-sort` argument. This argument allows to properly perform **integer sorting**. 

<Execute command="echo -e '1\n100\n2\n3\n200\n20\n10' | sort -n " />

Keep in mind that one need to **read the sort manual carefully** when working with **floating numbers** (see `--general-numeric-sort` argument):

```
man sort
```
By default, sorting is performed based on all characters in the line.


One last pipe example: we want to count the number of gene, cds, etc present in the `SAOUHSC.bed`. First we cut the column that contains these informations (the 4th one), we then extract the first part before the `-`, next we sort the entries, and last we print the number of each redundant entry: 

```
cut -f 4 SAOUHSC.bed | cut -d "-" -f 1 | sort | uniq -c
```
You could proceed the pipeline step by step, viewing the intermediate results with the `head` command:
```
cut -f 4 SAOUHSC.bed | head
cut -f 4 SAOUHSC.bed | cut -d "-" -f 1 | head
cut -f 4 SAOUHSC.bed | cut -d "-" -f 1 | sort | head
```


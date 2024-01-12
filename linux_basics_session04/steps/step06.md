<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

As we've seen so far, the **sort** command performs, **by default, alphanumeric sorting** on a text stream. 
As we said before and as you can see below, alphanumeric sorting is not well suited for numeric values.

<Execute command="echo -e '1\n100\n2\n3\n200\n20\n10' | sort" />

To perform numeric sorting one need to activate the `-n/--numeric-sort` argument. This argument allows to properly perform **integer sorting**. 

<Execute command="echo -e '1\n100\n2\n3\n200\n20\n10' | sort -n " />

Keep in mind that one need to **read the sort manual carefully** when working with **floating numbers** (see `--general-numeric-sort` argument):

```
man sort
```
By default, sorting is performed based on all characters in the line.

As a final example of using pipes, let's count the occurrences of genomic elements (gene, CDS...) in the `SAOUHSC.bed` file. First, we extract the 4th column, containing this information. Next, we isolate the prefix before the hyphen (-) using cut, proceed to sort then finally display the number of occurences of each entry.

```
cut -f 4 SAOUHSC.bed | cut -d "-" -f 1 | sort | uniq -c
```
To help understand the process you can use the following instructions that display the first lines produced by each intermediate step.

```
cut -f 4 SAOUHSC.bed | head
cut -f 4 SAOUHSC.bed | cut -d "-" -f 1 | head
cut -f 4 SAOUHSC.bed | cut -d "-" -f 1 | sort | head
```

<Quiz id="question2" choices={[
	{ valid: false, value: "cut -f4  SAOUHSC.bed | sort -u | wc -l | grep 'gene'"},
		{ valid: true, value: "cut -f4  SAOUHSC.bed | grep 'gene' | sort -u | wc -l"},
	{ valid: false, value: "cut -f4  SAOUHSC.bed | grep 'gene' SAOUHSC.bed  | sort -u | wc -l"},
]}>
	<span slot="prompt">
		What would be the command to compute the number of non-redundant genes (ie. lines with fourth column starting with 'gene') in the `SAOUHSC.bed` file.
	</span>
</Quiz>

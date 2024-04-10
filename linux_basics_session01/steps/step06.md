<script>
import Alert from "components/Alert.svelte";
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

Sometimes you want to select several files with a single command. One way to do it would be to write all the file names in the command line, but it is tedious and doesn't garantee that you won't miss some files (misspelling...). A better way is to use Unix's special characters called wildcards. One of these wildcards is the `*`(**star**) which represents either no characters, one character or any chain of characters (aka **string**).

For example:
```bash
ls *.txt
```
only prints the name of the file with the `.txt` extension. Try it for yourself.

Other examples are:
```bash
ls Data/*.fastq
```
only prints the fastq files in the Data directory

```bash
ls Data/*.f*
```
prints all the files with an extension starting with `f`, `.fastq` and `.fna`

```bash
ls Data/*f*
```
prints all the files containing `f` in their name, `.fastq`, `.fbna` and `.gff`. Since you didn't use the `.`, the selection will cover the whole file name.

<!--ls */*.* ne marche pas dans sandbox v1-->

`?` (**question mark**) is another wirldcard. It represents one character (and only one!).

For example:
```bash
ls ?ata
```
prints the content of the Data directory

```bash
ls Data/SRR309958?_chr18.fastq
```
prints only three `fastq` files: `Data/SRR3099585_chr18.fastq`, `Data/SRR3099586_chr18.fastq` and `Data/SRR3099587_chr18.fastq`

You can also combine `?` and `*`wildcards:
```bash
ls Data/*8?_chr18.fastq
```
prints the same three files

<Quiz id="qwildcards" choices={[
	{ valid: false, value: "3"},
	{ valid: true, value: "2"},
	{ valid: false, value: "0"},
	{ valid: false, value: "8"},
]}>
	<span slot="prompt">
		How many files the ls command `ls Data/*7_*` lists ?
	</span>
</Quiz>


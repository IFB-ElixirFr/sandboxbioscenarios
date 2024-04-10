<script>
import Alert from "components/Alert.svelte";
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

## Wildcards (titre de niveau 1 à trouver pour le config)

Sometimes you want to select several files with a single command. One way to do it would be to write all the file names in the command line, but it is tedious and doesn't garantee that you won't miss some files (misspelling...). A better way is to use Unix's special characters called wildcards. One of these wildcards is the `*`(**star**) which represents either no characters, one character or any chain of characters (aka **string**).

For example:
```bash
ls *.txt
```
will only print the name of the file with the `.txt` extension. Try it for yourself.
Other examples are:
```bash
ls Data/*.fastq
```
will print only the fastq files in the Data directory

```bash
ls Data/*.f*
```
will print all the files with an extension starting with `f`, `.fastq` and `.fna`

```bash
ls Data/*f*
```
will print all the files containing `f` in their name, `.fastq`, `.fbna` and `.gff`. Since you didn't use the `.`, the selection will cover the whole file name.




<!--ls */*.* ne marche pas dans sandbox v1-->
